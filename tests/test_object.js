var shared_func = require('../shared_libs/shared_function.js');
require('../shared_libs/global_config.js');

module.exports = {
	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
			menuSection = browser.page.opsportal.menu(),
			appListPage = browser.page.app_builder.app_list();

		browser
			.url(browser.launchUrl) // Go to http://localhost:1337/page/opsportal
			.waitForElementVisible('body', 1000); // Wait for the login page

		loginPage.passLogin(); // login

		menuSection.selectAppBuilder(); // Select app builder menu item

		appListPage.selectApp();
	},

	'test create a new object with string': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextInput(); //'TEST ' + Math.random().toString(10).substring(12);
		// console.log(global.delaytime);
		// var ind = 0;
		// for(ind = 0; ind<10; ind++)
		// {
			objectListElement
				.clickAddNewObject()
				.enterBlankObjectName(newObjectName)
				.saveBlankObject()
				.waitForElementVisible(objectListElement.elements.addNewObjectButton.selector, global.defaultwaittime * global.delaytime);

			// Assert new object is in list
			browser
				.waitForElementNotVisible(objectListElement.elements.addNewObjectPopup.selector, global.querywaittime)
				.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
					var lastObjItem = elems.value[elems.value.length - 1];

					browser.elementIdText(lastObjItem.ELEMENT, function (result) {
						// Assert
						browser.assert.equal(result.value, newObjectName);
					});
				})
				.pause(global.defaultwaittime * global.delaytime)
				.end();
		// }

	},

	'test create a new object with string and number' : function(browser) {
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextInput() + shared_func.randomNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		// console.log(global.delaytime);
		// var ind = 0;
		// for(ind = 0; ind<10; ind++)
		// {
			objectListElement
				.clickAddNewObject()
				.enterBlankObjectName(newObjectName)
				.saveBlankObject()
				.waitForElementVisible(objectListElement.elements.addNewObjectButton.selector, global.defaultwaittime * global.delaytime);

			browser
				.waitForElementNotVisible(objectListElement.elements.addNewObjectPopup.selector, global.querywaittime)
				.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
					var lastObjItem = elems.value[elems.value.length - 1];

					browser.elementIdText(lastObjItem.ELEMENT, function (result) {
						// Assert
						browser.assert.equal(result.value, newObjectName);
					});
				})
				.pause(global.defaultwaittime * global.delaytime)
				.end();
		// }

	},

	'test create a new object with exceed 20 letter' : function(browser) {
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextInput(11) + shared_func.randomNumberInput(11); //'TEST ' + Math.random().toString(10).substring(12);
		// console.log(global.delaytime);
		objectListElement
			.clickAddNewObject()
			.enterBlankObjectName(newObjectName)
			.saveBlankObject()
			.waitForElementVisible(objectListElement.elements.objectAlertDialog.selector, global.defaultwaittime * global.delaytime);

		browser
			// .waitForElementNotVisible(objectListElement.elements.addNewObjectPopup.selector, global.querywaittime)
			// .elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
			// 	var lastObjItem = elems.value[elems.value.length - 1];

			// 	browser.elementIdText(lastObjItem.ELEMENT, function (result) {
			// 		// Assert
			// 		browser.assert.equal(result.value, newObjectName);
			// 	});
			// })
			// .pause(global.defaultwaittime * global.delaytime)
			.end();
	},


	// 'test import exists object': function (browser) {
	// 	var objectCreator = browser.page.app_builder.object_creator();

	// 	objectCreator
	// 		.clickAddNewObject()
	// 		.changeToImportExistsObject()
	// 		.selectExistsObject()
	// 		.saveImportExistsObject();

	// 	// Assert new object is in list
	// 	var existsObjectName;

	// 	browser
	// 		.elements('css selector', objectCreator.elements.existsObjectItem.selector, function (elems) {
	// 			browser.elementIdText(elems.value[0].ELEMENT, function (result) {
	// 				existsObjectName = result.value;
	// 			});
	// 		})
	// 		.waitForElementNotVisible(objectCreator.elements.addNewObjectPopup.selector, 10000)
	// 		.elements('css selector', objectCreator.elements.objectList.selector, function (elems) {
	// 			var lastObjItem = elems.value[elems.value.length - 1];

	// 			browser.elementIdText(lastObjItem.ELEMENT, function (result) {
	// 				// Assert
	// 				browser.assert.equal(result.value, existsObjectName);
	// 			});
	// 		})
	// 		.pause(1000)
	// 		.end();
	// },

	// 'test import CSV object': function (browser) {
	// 	var objectCreator = browser.page.app_builder.object_creator();
	// 	var newObjectName = 'TEST ' + Math.random().toString(10).substring(12);

	// 	objectCreator
	// 		.clickAddNewObject()
	// 		.changeToCsvObject()
	// 		.enterCsvObjectName(newObjectName)
	// 	// TODO : Choose CSV file
	// 		.cancelCsvObject();

	// 	browser.pause(1000).end();
	// }

};