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
      self.vars[_.snakeCase(rule)] = false;
      self.vars[rule] = false;
    });
  },

  prompting: function () {
    var self = this;
    var done = self.async();

    self.prompt(questions.filter(function (answer) { return answer.type !== 'list-depth';}).slice(0, 10) , function (answers) {
      _.assign(self.vars, answers);
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
    self.npmInstall(['eslint'], { 'saveDev': true });
  },

  end: function () {

  }
});