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

	

	/*'test date Case 1 selectimageAttachmentFieldType': function (browser) {
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
				console.log("step 2 selectselectListFieldType");
					coffeeObject
						.selectimageAttachmentFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterimageAttachmentLabelNameTextBox(labelname)
						.enterimageAttachmentNameTextBox(Name)
						.imageAttachmenthowIconCheckBox()
						.imageAttachmentWidthCheckBox()
						.imageAttachmentHeightCheckBox()
						.imageAttachmentWidthInput(480)
						.imageAttachmentHeightInput(240);
						//.selectlistshowIconCheckBox();

					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},		
		'test date Case 2 selectimageAttachmentFieldType': function (browser) {
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
				console.log("step 2 selectselectListFieldType");
					coffeeObject
						.selectimageAttachmentFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterimageAttachmentLabelNameTextBox(labelname)
						.enterimageAttachmentNameTextBox(Name)
						.imageAttachmenthowIconCheckBox();
						//.imageAttachmentWidthCheckBox();
						//.imageAttachmentHeightCheckBox()
						//.imageAttachmentWidthInput(480)
						//.imageAttachmentHeightInput(240);
						//.selectlistshowIconCheckBox();

					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 3 selectimageAttachmentFieldType': function (browser) {
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
				console.log("step 2 selectselectListFieldType");
					coffeeObject
						.selectimageAttachmentFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterimageAttachmentLabelNameTextBox(labelname)
						.enterimageAttachmentNameTextBox(Name)
						//.imageAttachmenthowIconCheckBox();
						.imageAttachmentWidthCheckBox()
						.imageAttachmentHeightCheckBox()
						.imageAttachmentWidthInput(480)
						.imageAttachmentHeightInput(240);
						

					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 		
	},*/
};