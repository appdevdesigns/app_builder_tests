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
	},

	'Create Interface' : function (browser) {

		var appListPage = browser.page.app_builder.app_list();
		var appInterfacePage = browser.page.app_builder.interface_list();

		async.series([
			// Get last item index
			function (next) {
				browser.elements('css selector', appListPage.elements.appItem.selector, function (elems) {
					lastAppIndex = elems.value.length;

					next();
				});
			},
			// Update application info
			function (next) {
				appListPage.selectApp(lastAppIndex);
				
				next();
			},
			], function (err) {
			browser.pause(500).end();
		});

	}
};