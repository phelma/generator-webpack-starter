'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the' + chalk.green('webpack-starter') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What would you like to call it?',
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.name;
      this.props = props;
      this.log(props.name);
    }.bind(this));
  },

  writing: {
    config: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'), {
          name: this.props.name
        }
      );
      this.fs.copy(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
    },

    app: function () {
      this.fs.copy(
        this.templatePath('src/index.html'),
        this.destinationPath('src/index.html')
      );
      this.fs.copy(
        this.templatePath('src/index.tpl.html'),
        this.destinationPath('src/index.tpl.html')
      );
      this.fs.copy(
        this.templatePath('src/main.js'),
        this.destinationPath('src/main.js')
      );
      this.fs.copy(
        this.templatePath('src/styles.css'),
        this.destinationPath('src/styles.css')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
