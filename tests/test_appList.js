var async = require('async');

module.exports = {
  	'@disabled': true,
	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
			menuSection = browser.page.opsportal.menu();

		browser
			.url(browser.launchUrl) // Go to http://localhost:1337/page/opsportal
			.waitForElementVisible('body', 1000); // Wait for the login page

		loginPage.passLogin(); // login

		menuSection.selectAppBuilder(); // Select app builder menu item
	},

	'test create new application': function (browser) {
		var appListPage = browser.page.app_builder.app_list();

		var newAppName = 'App name ' + Math.random().toString(10).substring(12),
			newAppDescription = 'Description ' + Math.random().toString(10).substring(12);

		appListPage.createApp()
			.enterAppName(newAppName)
			.enterAppDescription(newAppDescription)
			.save();

		// verify new application is in list
		browser
			.waitForElementVisible(appListPage.elements.appItemName.selector, 10000)
			.elements('css selector', appListPage.elements.appItemName.selector, function (elems) {
				var lastAppItem = elems.value[elems.value.length - 1];

				browser.elementIdText(lastAppItem.ELEMENT, function (result) {
					// verify application name
					browser.verify.equal(result.value, newAppName);
				});
			})
			.elements('css selector', appListPage.elements.appItemDescription.selector, function (elems) {
				var lastAppItem = elems.value[elems.value.length - 1];

				browser.elementIdText(lastAppItem.ELEMENT, function (result) {
					// verify application description
					browser.verify.equal(result.value, newAppDescription);
				});
			})
			.pause(45000) // Wait until create app files complete
			.end();
	},

	'test edit application name & description': function (browser) {
		var appListPage = browser.page.app_builder.app_list();

		var newAppName = 'App name ' + Math.random().toString(10).substring(12),
			newAppDescription = 'Description ' + Math.random().toString(10).substring(12),
			lastAppIndex;

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
				appListPage.editApp(lastAppIndex)
					.enterAppName(newAppName)
					.enterAppDescription(newAppDescription)
					.save();

				next();
			},
			// verify: an application is updated
			function (next) {
				browser
					.waitForElementVisible(appListPage.elements.appItemName.selector, 10000)
					.elements('css selector', appListPage.elements.appItemName.selector, function (elems) {
						var lastAppItem = elems.value[elems.value.length - 1];

						browser.elementIdText(lastAppItem.ELEMENT, function (result) {
							// verify application name
							browser.verify.equal(result.value, newAppName);
						});
					})
					.elements('css selector', appListPage.elements.appItemDescription.selector, function (elems) {
						var lastAppItem = elems.value[elems.value.length - 1];

						browser.elementIdText(lastAppItem.ELEMENT, function (result) {
							// verify application description
							browser.verify.equal(result.value, newAppDescription);
						});
					});

				next();
			}
		], function (err) {
			browser.pause(500).end();
		});
	},

	'test delete application': function (browser) {
		var appListPage = browser.page.app_builder.app_list(),
			lastAppIndex,
			appName,
			appDescription;

		async.series([
			// Get last item index
			function (next) {
				browser.elements('css selector', appListPage.elements.appItem.selector, function (elems) {
					lastAppIndex = elems.value.length;

					next();
				});
			},
			// Get delete application name
			function (next) {
				browser.elements('css selector', appListPage.elements.appItemName.selector, function (elems) {
					var lastAppItem = elems.value[lastAppIndex];

					browser.elementIdText(lastAppItem.ELEMENT, function (result) {
						appName = result.value;

						next();
					});
				});
			},
			// Get delete application description
			function (next) {
				browser.elements('css selector', appListPage.elements.appItemDescription.selector, function (elems) {
					var lastAppItem = elems.value[lastAppIndex];

					browser.elementIdText(lastAppItem.ELEMENT, function (result) {
						appDescription = result.value;

						next();
					});
				});
			},
			// Delete an application
			function (next) {
				appListPage
					.deleteApp(lastAppIndex)
					.confirmDeleteApp();

				next();
			},
			// verify: an application is deleted
			function (next) {
				browser
					.waitForElementVisible(appListPage.elements.appItemName.selector, 10000)
					.elements('css selector', appListPage.elements.appItemName.selector, function (elems) {
						elems.value.forEach(function (val) {
							browser.elementIdText(val.ELEMENT, function (result) {
								browser.verify.notEqual(result.value, appName);
							});
						});
					})
					.elements('css selector', appListPage.elements.appItemDescription.selector, function (elems) {
						elems.value.forEach(function (val) {
							browser.elementIdText(val.ELEMENT, function (result) {
								browser.verify.notEqual(result.value, appDescription);
							});
						});
					});

				next();
			}], function (err) {
				browser.pause(500).end();
			});
	}
};