var async = require('async');
var shared_func = require('../shared_libs/shared_function.js');

module.exports = {
	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
			menuSection = browser.page.opsportal.menu();

		browser
			.url(browser.launchUrl)
			.maximizeWindow()
			.waitForElementVisible('body', 3000)
			.perform(function() {
				loginPage.passLogin();
			})
			.perform(function() {
				menuSection.selectCoffeeShop();
			});


	},	

	'test apply sort': function(browser) {

		var coffeePage = browser.page.app.coffee_list();

		browser
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton()
					.clickApplySortButton();
			})
			.pause(3000)
			.perform(function() {
				console.log("step 2");
				browser
					.moveToElement(".webix_layout_line .webix_el_combo .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0);

			})
			.pause(2000)
			.perform(function() {
				coffeePage
					.clickFillterUserEmail();
						
			})
			.pause(2000)
			.perform(function() {
				coffeePage
					.clickDESCButton();

				browser.elements('css selector', 'div[column="1"] .webix_cell', function (data) {
					console.log(data.value.length);
					for (var i = 1; i <= data.value.length; i++) {
										console.log(data.value);
									};
				});
						
			});

	}
};