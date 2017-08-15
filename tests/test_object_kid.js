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

	'test create new application': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

			coffeeObject.selectObjectTest();

			

	}
};