var async = require('async');
var shared_func = require('../shared_libs/shared_function.js');
module.exports = {

	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
			menuSection = browser.page.opsportal.menu();

		browser
			.url(browser.launchUrl) // Go to http://localhost:1337/page/opsportal
			.waitForElementVisible('body', 1000); // Wait for the login page

		loginPage.passLogin(); // login

		menuSection.selectAppBuilder(); // Select app builder menu item

		menuSection.selectTestCoffeeShop();
	},

	


	'test long  text Case 1 with string': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();
			var labelname = shared_func.randomTextInput(20);
			var Name = shared_func.randomTextInput(20);
			browser
			.perform(function() {
				console.log("step 1 selectObjectTest selectAddNewColumnButton selectFieldTypeButton");
					coffeeObject
						.selectObjectTest()
						.selectAddNewColumnButton()
						.selectFieldTypeButton();
			})
			.pause(3000)
			.perform(function() {
				console.log("step 2 singleLineTextFieldType");
					coffeeObject
						.selectlongTextFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterlongTextLabelName(labelname)
						.enterlongTextName(Name)
						//.clicklongTextShowIcon()
						.enterlongTextDefaultName("testlongTextdefaultname")
						//.clicklongTextSupportMultilingual();

			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
	},
	'test long  text Case 2 with string and Number': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();
			var labelname = shared_func.randomTextInput() + shared_func.randomNumberInput();
			var Name = shared_func.randomTextInput() + shared_func.randomNumberInput();
			
			browser
			.perform(function() {
				console.log("step 1 selectObjectTest selectAddNewColumnButton selectFieldTypeButton");
					coffeeObject
						.selectObjectTest()
						.selectAddNewColumnButton()
						.selectFieldTypeButton();
			})
			.pause(3000)
			.perform(function() {
				console.log("step 2 singleLineTextFieldType");
					coffeeObject
						.selectlongTextFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterlongTextLabelName(labelname)
						.enterlongTextName(Name)
						//.clicklongTextShowIcon()
						.enterlongTextDefaultName("testlongTextdefaultname")
						//.clicklongTextSupportMultilingual();

			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
	},
	'test long  text Case 3 with 100 length': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();
			var labelname = shared_func.randomTextInput(1000);
			var Name = shared_func.randomTextInput(1000);

			browser
			.perform(function() {
				console.log("step 1 selectObjectTest selectAddNewColumnButton selectFieldTypeButton");
					coffeeObject
						.selectObjectTest()
						.selectAddNewColumnButton()
						.selectFieldTypeButton();
			})
			.pause(3000)
			.perform(function() {
				console.log("step 2 singleLineTextFieldType");
					coffeeObject
						.selectlongTextFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterlongTextLabelName(labelname)
						.enterlongTextName(Name)
						//.clicklongTextShowIcon()
						.enterlongTextDefaultName("testlongTextdefaultname")
						//.clicklongTextSupportMultilingual();

			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
	},
	'test long  text Case 4 string and special': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();
			var labelname = shared_func.randomTextInput() + shared_func.randomSpecialCharacterInput();
			var Name = shared_func.randomTextInput() + shared_func.randomSpecialCharacterInput();

			browser
			.perform(function() {
				console.log("step 1 selectObjectTest selectAddNewColumnButton selectFieldTypeButton");
					coffeeObject
						.selectObjectTest()
						.selectAddNewColumnButton()
						.selectFieldTypeButton();
			})
			.pause(3000)
			.perform(function() {
				console.log("step 2 singleLineTextFieldType");
					coffeeObject
						.selectlongTextFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterlongTextLabelName(labelname)
						.enterlongTextName(Name)
						//.clicklongTextShowIcon()
						.enterlongTextDefaultName("testlongTextdefaultname")
						//.clicklongTextSupportMultilingual();

			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
	},


	
};