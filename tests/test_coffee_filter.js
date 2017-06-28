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

	'test filter User Email': function(browser) {

		var coffeePage = browser.page.app.coffee_list();
		var max_rows = 0;

		browser
			.pause(2000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton();
					// .clickFilterUserButton();
			})
			// .pause(2000)
			// .perform(function() {
			// 	console.log("step 2 call first dropdown");
			// 	coffeePage
			// 		.setupDropdownFilter(1, 1);
			// })
			// .perform(function() {
			// 	console.log("step 3 select first combo");
			// 	browser
			// 		.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(1) .webix_el_box", 5, 5)
			// 		.mouseButtonDown(0)
			// 		.mouseButtonUp(0);
			// })
			// .pause(2000)
			// .perform(function() {
			// 	console.log("step 4 call second dropdown");
			// 	coffeePage
			// 		.setupDropdownFilter(1, 2);
			// })
			// .pause(2000)
			// .perform(function() {
			// 	console.log("step 5 select second combo");
			// 	browser
			// 		.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 5, 5)
			// 		.mouseButtonDown(0)
			// 		.mouseButtonUp(0)
			// 		.pause(2000)
			// 		.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 20, 60)
			// 		.mouseButtonDown(0)
			// 		.mouseButtonUp(0);
			// })
			// .pause(2000)
			// .perform(function() {
			// 	console.log("step 6 call third dropdown");
			// 	coffeePage
			// 		.setupDropdownFilter(1, 3);
			// })
			// .pause(2000)
			// .perform(function() {
			// 	console.log("step 7 select third combo");
			// 	browser
			// 		.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 60)
			// 		.mouseButtonDown(0)
			// 		.mouseButtonUp(0);
			// })
			// .pause(2000)
			// .perform(function() {
			// 	console.log("step 8 set forth value");
			// 	coffeePage
			// 		.setupFilterValue(1, "test");
			// })
			// .pause(2000)
			// .perform(function() {
			// 	console.log("step 9 dismiss dropdown");
			// 	browser
			// 		.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 200)
			// 		.mouseButtonDown(0)
			// 		.mouseButtonUp(0);
			// })
			.pause(2000)
			.perform(function() {
				console.log("step 10 Get Data from view");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(1) .webix_cell', function (elems) {
					// console.log(elems);
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							console.log(j);
							coffeePage
								.getWebixUserEmailValue(j);
						}	
					};
				});
			})
			.pause(2000)
			.perform(function() {
				console.log("step 11 verify");
				console.log(global.userEmailArray);
			});
	}
};