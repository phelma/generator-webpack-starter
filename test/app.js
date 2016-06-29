'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-webpack-starter:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: 'test-app-name'})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      'README.md',
      'webpack.config.js',
      'src/index.html',
      'src/main.js',
      'src/styles.css'
    ]);
  });
});
