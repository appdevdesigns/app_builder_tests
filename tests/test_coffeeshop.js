

module.exports = {
	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
			menuCoffeeSection = browser.page.app_builder.coffee_list();

		browser
			.url(browser.launchUrl) // Go to http://localhost:1337/page/opsportal
			.waitForElementVisible('body', 1000); // Wait for the login page

		loginPage.passLogin(); // login

		menuCoffeeSection.selectCoffeeShop(); // Select app builder menu item
	},



};