var async = require('async');
var shared_func = require('../shared_libs/shared_function.js');

module.exports = {
	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
			menuSection = browser.page.opsportal.menu();

		browser
			.url(browser.launchUrl)
			.maximizeWindow()
			.waitForElementVisible('body', 1000)
			.perform(function() {
				loginPage.passLogin();
			})
			.perform(function() {
				menuSection.selectCoffeeShop();
			});


	},	

	'test filter': function(browser) {

		var coffeePage = browser.page.app.coffee_list();
		
		browser
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton()
					.clickFilterUserButton();
			})
			.pause(2000)
			.perform(function() {
				console.log("step 2");
				coffeePage
					.setupDropdownFilter(1, 1);
			})
			.perform(function() {
				console.log("step 3");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(1) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(2000)
			.perform(function() {
				console.log("step 4");
				coffeePage
					.setupDropdownFilter(1, 2);
			})
			.pause(2000)
			.perform(function() {
				console.log("step 5");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0)
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 20, 60)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(2000)
			.perform(function() {
				console.log("step 6");
				coffeePage
					.setupDropdownFilter(1, 3);
			})
			.pause(2000)
			.perform(function() {
				console.log("step 7");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0)
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 60)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			});
	}
};