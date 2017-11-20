require('./calc.js');
require('../protractor.conf.js');

var mainPage = function() {

    var TextBox1 = element(by.model('first'));
    var Operator = element(by.model('operator'));
    var TextBox2 = element(by.model('second'));
    var GoButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    this.go = function() {
         browser.get('http://juliemr.github.io/protractor-demo/');
    }

    this.enterText1 = function(text) {
        TextBox1.sendKeys(text);
    };

    this.enterText2 = function(text) {
        TextBox2.sendKeys(text);
    };

    this.chooseOperator = function() {
        //TODO
    };

    this.add = function(a, b) {
        TextBox1.sendKeys(a)
        TextBox2.sendKeys(b)
        GoButton.click();

    }
};
module.exports = new mainPage();
