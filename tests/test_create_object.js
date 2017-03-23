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

	// 'test create a new empty object': function (browser) {
	// 	var objectCreator = browser.page.app_builder.object_creator();
	// 	var newObjectName = 'TEST ' + Math.random().toString(10).substring(12);

	// 	objectCreator
	// 		.clickAddNewObject()
	// 		.enterBlankObjectName(newObjectName)
	// 		.saveBlankObject();

	// 	// Assert new object is in list
	// 	browser
	// 		.waitForElementNotVisible(objectCreator.elements.addNewObjectPopup.selector, 10000)
	// 		.elements('css selector', objectCreator.elements.objectList.selector, function (elems) {
	// 			var lastObjItem = elems.value[elems.value.length - 1];

	// 			browser.elementIdText(lastObjItem.ELEMENT, function (result) {
	// 				// Assert
	// 				browser.assert.equal(result.value, newObjectName);
	// 			});
	// 		})
	// 		.pause(1000)
	// 		.end();
	// },

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