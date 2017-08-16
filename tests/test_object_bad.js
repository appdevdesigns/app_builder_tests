var shared_func = require('../shared_libs/shared_function.js');
require('../shared_libs/global_config.js');

module.exports = {
  	// '@disabled': true,
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

		browser
			.perform(function() {
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName("Delete This")
					.cancelBlankObject()
					.clickAddNewObject()
					.enterBlankObjectName(newObjectName)
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
				var lastObjItem = elems.value[elems.value.length - 1];

				browser.elementIdText(lastObjItem.ELEMENT, function (result) {
					// Assert
					browser.assert.equal(result.value, newObjectName);
				});
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();

	},

	'test create a new object with string and number' : function(browser) {
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextInput() + shared_func.randomNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		
		browser
			.perform(function() {
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName("Delete This")
					.cancelBlankObject()
					.clickAddNewObject()
					.enterBlankObjectName(newObjectName)	
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
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

	}

};