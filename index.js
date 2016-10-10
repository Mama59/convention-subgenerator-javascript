'use strict';
var generators = require('yeoman-generator');
var _ = require('lodash');
var allEslintRules = require('all-eslint-rules');
var questions = require('./questions');

var gulpfileGenerator = module.exports = generators.Base.extend({
  // constructor: function () {
  //   console.log(this.option);
  //   this.option('level_config', {
  //     type: 'string',
  //     required: false,
  //     defaults: 'expert',
  //     desc: 'Level config'
  //   });
  // },

  initializing: function () {
    var self = this;
    var levelQuestion = {
      type: 'list',
      name: 'level_config',
      message: 'Which level of configuration do you want ?',
      choices: ['beginner', 'confirmed', 'expert']
    };
    this.vars = {};
    [levelQuestion].concat(allEslintRules).forEach(function (rule) {
        self.vars[_.snakeCase(rule)] = 0;
        self.vars[rule] = 0;
    });
  },

  prompting: function () {
    var self = this;
    var done = self.async();
    var levelNum = getLevelNumber(self.vars.level_config);
    console.log(levelNum);

    var list = questions.filter(function (question) {
        return question.priority >= levelNum;
      })
      .reduce(function (concatList, question) {
          return concatList.concat(question.type !== 'list-depth' ? [question] : question.lists);
      }, [])
      .filter(function (question) {
        return question != null;
      });

    console.log(list.length + ' questions');
    self.prompt(list, function (answers) {
        var answersTmp = {};
        var listType = list.filter(function (question) {
          return question.type === 'checkbox';
        }).map(function (question) {
          return question.name;
        });

        _.forEach(answers, function (answer, key) {
            var splittedKey = key.split('.');

            if (splittedKey.length > 1) {
                var name = splittedKey[0];
                var option = splittedKey[1];
                if (answersTmp[name] !== undefined) {
                    answersTmp[name][option] = answer;
                }
                else {
                    answersTmp[name] = {};
                    answersTmp[name][option] = answer;
                }
            }
            else {
                answersTmp[key] = answer;
            }
        });

        _.forEach(answersTmp, function (answer, key) {
            if(answer === true) {
              answer = 2;
            }
            else if(answer === false) {
              answer = 0;
            }
            else if (listType.indexOf(key) !== -1) {
              answer = [2, answer.reduce(function (obj, param) {
                var newObj = {};
                newObj[param] = true;
                return _.assign({}, obj, newObj);
              }, {})];
            } else {
              answer = [1, answer];
            }
            answersTmp[key] = JSON.stringify(answer);
        });

        _.assign(self.vars, answersTmp);
        done();
    });
  },


  configuring: function () {
    var self = this;
  },

  writing: function () {
    var self = this;

    self.fs.copyTpl(self.templatePath('**/{.,}*'), self.destinationPath('.'), self.vars);
  },

  install: function () {
    var self = this;

    self.installDependencies();
    self.npmInstall(['eslint'], {'saveDev': true});
  },

  end: function () {

  }
});

function getLevelNumber(levelString) {
  switch(levelString) {
    case 'beginner':
      return 2;
    case 'confirmed':
      return 1;
    case 'expert':
      return 0;
    default:
      return 2;
  }
}
