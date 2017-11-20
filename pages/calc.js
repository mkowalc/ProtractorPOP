//calc.js

var mainPage = require('./mainPageObject.js');

describe('Testing calc', function (){
	beforeEach(function () {
		 mainPage.go();

	});
	it ('should add two numbers', function() {
		mainPage.add(3, 3);

	});

});
