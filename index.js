'use strict';
var generators = require('yeoman-generator');
var _ = require('lodash');
var allEslintRules = require('all-eslint-rules');
var questions = require('./questions');

var gulpfileGenerator = module.exports = generators.Base.extend({
  initializing: function () {
    var self = this;
    this.vars = {};
    allEslintRules.forEach(function (rule) {
        self.vars[_.snakeCase(rule)] = 0;
        self.vars[rule] = 0;
    });
  },

  prompting: function () {
    var self = this;
    var done = self.async();

    var list = questions.slice(0, 10).reduce(function (concatList, question) {
        return concatList.concat(question.type !== 'list-depth' ? [question] : question.lists);
    }, []);

    self.prompt(list, function (answers) {
        var answersTmp = {};
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
            else{
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
