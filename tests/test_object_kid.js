var async = require('async');

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

	'test single line text Case 1 All Data': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
						.selectsingleLineTextFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterLabelName("testLabel")
						.enterName("testName")
						//.clickShowIcon()
						.enterDefaultName("testdefaultname")
						//.clickSupportMultilingual();

			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
	},

	'test single line text Case 2 No All Data': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
						.selectsingleLineTextFieldType();
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
	},
	'test single line text Case 3 No Multiligual Checkbox': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
						.selectsingleLineTextFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterLabelName("testLabel")
						.enterName("testName")
						.clickShowIcon()
						.enterDefaultName("testdefaultname")
						//.clickSupportMultilingual();

			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
	},
	'test single line text Case 4 No Show Icon Checkbox': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
						.selectsingleLineTextFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterLabelName("testLabel")
						.enterName("testName")
						//.clickShowIcon()
						.enterDefaultName("testdefaultname")
						.clickSupportMultilingual();

			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
	},
	'test single line text Case 5 No Show Icon and SupportMultilingual  Checkbox': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
						.selectsingleLineTextFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterLabelName("testLabel")
						.enterName("testName")
						.clickShowIcon()
						.enterDefaultName("testdefaultname")
						.clickSupportMultilingual();

			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
	},
	/*'test single line text Case 6 Cancel': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
						.selectsingleLineTextFieldType();
			})
			.perform(function() {
				console.log("step 4 cancelAddNewColumnButton");
					coffeeObject
						.cancelAddNewColumnButton();

			})
			.pause(2000)
			.end(); 
	},*/


	'test long  text Case 1 All Data': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
						.enterlongTextLabelName("testlongTextLabel")
						.enterlongTextName("testlongTextName")
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

	'test long  text Case 2 No Data': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
	},

	'test long  text Case 3 No Show Icon Checkbox': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
						.enterlongTextLabelName("testlongTextLabel")
						.enterlongTextName("testlongTextName")
						.clicklongTextShowIcon()
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

	'test long  text Case 4 No Mulltilingual Checkbox': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
						.enterlongTextLabelName("testlongTextLabel")
						.enterlongTextName("testlongTextName")
						//.clicklongTextShowIcon()
						.enterlongTextDefaultName("testlongTextdefaultname")
						.clicklongTextSupportMultilingual();

			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
	},

	'test long  text Case 5 No Mulltilingual and  ShowIcon Checkbox  ': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
						.enterlongTextLabelName("testlongTextLabel")
						.enterlongTextName("testlongTextName")
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

	/*'test long  text Case 6 cancel  ': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
				console.log("step 4 cancelAddNewColumnButton");
					coffeeObject
						.cancelAddNewColumnButton();

			})
			.pause(2000)
			.end(); 
	},*/

	'test number': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
						.selectnumberFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterNumberLabelName("testNumberLabel")
						.enterNumberName("testNumberName");

						

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