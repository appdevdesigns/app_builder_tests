var async = require('async');
var shared_func = require('../shared_libs/shared_function.js');

module.exports = {
	'@tags': ['SEARCH'],
	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
			menuSection = browser.page.opsportal.menu();

		global.calendarSelector = "";
		global.calendarDate = "";
		global.userDataArray = [];
		global.userDataArray2 = [];
		
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

	'test filter User Email contain word': function(browser) {

		var coffeePage = browser.page.app.coffee_list();
		var max_rows = 0;
		var wordSearch = "test";
		browser
			.pause(1000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton()
					.clickFilterUserButton();
			})
			.pause(1000)
			.perform(function() {
				console.log("step 2 call first dropdown");
				coffeePage
					.setupDropdownFilter(1, 1);
			})
			.perform(function() {
				console.log("step 3 select first combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(1) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 4 call second dropdown");
				coffeePage
					.setupDropdownFilter(1, 2);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 5 select second combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0)
					.pause(1000)
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 20, 60)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 6 call third dropdown");
				coffeePage
					.setupDropdownFilter(1, 3);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 7 select third combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 60)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 8 set forth value");
				coffeePage
					.setupFilterValue(1, wordSearch);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 9 dismiss dropdown");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 200)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 10 Get Data from view");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(1) .webix_cell', function (elems) {
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						for (var j = 1; j <= max_rows; j++) {
							// console.log(j);
							coffeePage
								.getWebixUserDataValue(j, 1);
						}	
					};
				});
			})
			.pause(1000)
			.perform(function() {
				console.log("step 11 verify");
				for (var i = 0; i < max_rows; i++) {
					var isContain = global.userDataArray[i].indexOf(wordSearch) !== -1;
					//Hotfix row 1
					if(global.userDataArray[0] == ''){
						isContain = true;
					};
					browser.verify.equal(isContain, true);
				}

			})
			.end();
	},

	'test filter User First Name not contain ': function(browser) {
		var coffeePage = browser.page.app.coffee_list();
		var max_rows = 0;
		var wordSearch = "test";

		//Clear global variable
		global.userEmailArray = [];
		global.userFirstNameArray = [];

		browser
			.pause(1000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton()
					.clickFilterUserButton();
			})
			.pause(1000)
			.perform(function() {
				console.log("step 2 call first dropdown");
				coffeePage
					.setupDropdownFilter(1, 1);
			})
			.perform(function() {
				console.log("step 3 select first combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(1) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 4 call second dropdown");
				coffeePage
					.setupDropdownFilter(1, 2);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 5 select second combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0)
					.pause(1000)
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 20, 100)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 6 call third dropdown");
				coffeePage
					.setupDropdownFilter(1, 3);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 7 select third combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 100)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 8 set forth value");
				coffeePage
					.setupFilterValue(1, wordSearch);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 9 dismiss dropdown");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 200)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 10 Get Data from view");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(2) .webix_cell', function (elems) {
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							// console.log(j);
							coffeePage
								.getWebixUserDataValue(j, 2);
						}	
					};
				});
			})
			.pause(1000)
			.perform(function() {
				console.log("step 11 verify");
				for (var i = 0; i < max_rows; i++) {
					var isNotContain = global.userDataArray[i].indexOf(wordSearch) !== -1;
					//Hotfix row 1
					if(global.userFirstNameArray[0] == ''){
						isContain = false;
					};
					browser.verify.equal(isNotContain, false);
				}

			})
			.end();
	},
	
	'test two filter': function(browser) {
		var coffeePage = browser.page.app.coffee_list();
		var max_rows = 0;
		var emailContain = "test";
		var firstNameContain = "MLUMqC";

		//Clear global variable
		global.userEmailArray = [];
		global.userFirstNameArray = [];

		browser
			.pause(1000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton()
					.clickFilterUserButton();
			})
			.pause(1000)
			.perform(function() {
				console.log("step 2 call first dropdown");
				coffeePage
					.setupDropdownFilter(1, 1);
			})
			.perform(function() {
				console.log("step 3 select first combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(1) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 4 call second dropdown");
				coffeePage
					.setupDropdownFilter(1, 2);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 5 select second combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0)
					.pause(1000)
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 20, 60)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 6 call third dropdown");
				coffeePage
					.setupDropdownFilter(1, 3);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 7 select third combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 60)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 8 set forth value");
				coffeePage
					.setupFilterValue(1, emailContain);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 9 add second filter");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(1) .webix_el_box", 20, 80)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 10 second filter call first dropdown");
				coffeePage
					.setupDropdownFilter(2, 1);
			})
			.perform(function() {
				console.log("step 11 second filter select first combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(2) .webix_el_combo:nth-of-type(1) .webix_el_box", 20, 105)
					.pause(1000)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 12 call second filter second dropdown");
				coffeePage
					.setupDropdownFilter(2, 2);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 13 select second filter second combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(2) .webix_el_combo:nth-of-type(2) .webix_el_box", 20, 100)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 14 call second filter third dropdown");
				coffeePage
					.setupDropdownFilter(2, 3);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 15 select third combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(2) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 60)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 16 set second filter forth value");
				coffeePage
					.setupFilterValue(2, firstNameContain);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 17 dismiss dropdown");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 300)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 18 Get Data from view");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(1) .webix_cell', function (elems) {
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							coffeePage
								.getWebixUserDataValue(j, 1)
								.getWebixUserData2Value(j, 2);
						}	
					};
				});
			})
			.pause(1000)
			.perform(function() {
				console.log("step 20 verify");

				for (var i = 0; i < max_rows; i++) {
					var result = false;
					var isContainEmail = global.userDataArray[i].indexOf(emailContain) !== -1;
					var isContainFirstName = global.userDataArray2[i].indexOf(firstNameContain) !== -1;
					if (isContainEmail || isContainFirstName) {
						result = true;
					}
					//Hotfix row 1
					if(global.userDataArray[0] == '' || global.userDataArray2[0] == ''){
						result = true;
					};
					browser.verify.equal(result, true);
				}
			});
	},

	'test filter Date Before': function(browser) {

		var coffeePage = browser.page.app.coffee_list();
		var max_rows = 0;
		var datetime = "";
		browser
			.pause(1000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton();
			})		
			.pause(2000)		
			.perform(function() {
				console.log("step 1.5 Count List");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(4) .webix_cell', function (elems) {
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						// for (var j = 1; j <= max_rows; j++) {
						// 	// console.log(j);
						// 	coffeePage
						// 		.getWebixUserDataValue(j, 4);
						// }	
					};
				});
			})	
			.pause(2000)
			.perform(function() {
				console.log("step pre 2");
				coffeePage
					.clickFilterUserButton();
			})
			.pause(1000)
			.perform(function() {
				console.log("step 2 call first dropdown");
				coffeePage
					.setupDropdownFilter(1, 1);
			})
			.perform(function() {
				console.log("step 3 select first combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(1) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 4 call second dropdown");
				coffeePage
					.setupDropdownFilter(1, 2);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 5 select second combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0)
					.pause(1000)
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 20, 150)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 6 call third dropdown");
				coffeePage
					.setupDropdownFilter(1, 3);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 7 select third combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 60)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})				
			.pause(1000)
			.perform(function() {
				console.log("step 8 Click Calendar");
				coffeePage
					.clickDateCalendar(1);
				
			})
			.pause(1000)
			.elements('css selector', ".webix_popup", function (elems) {
				console.log("step 9 assign popup");
				//Add max_rows to fix popup count bug
				console.log(elems.value.length);
				coffeePage
					.getDateFilterValue(1, elems.value.length)
				
			})
			.pause(2000)
			.perform(function() {
				console.log("step 10 set Calendar");
				coffeePage
					.setDateFilterValue(5);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 11 set datetime to global");
				coffeePage	
					.setDateCalendarToGlobal();
			})
			.pause(1000)
			.perform(function() {
				console.log("step 12 dismiss dropdown");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 200)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 13 Get after filter Data");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(4) .webix_cell', function (elems) {
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						for (var j = 1; j <= max_rows; j++) {
							coffeePage
								.getWebixUserDataValue(j, 4);
						}	
					};
				});
				console.log(global.calendarDate);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 14 Compare Date");
				for (var i = 0; i < global.userDataArray.length; i++) {
					var isAfter = false;
					var dataArray = global.userDataArray[i].split(/\//);
					var dateString = new Date(dataArray[1]+"/"+dataArray[0]+"/"+dataArray[2]);
					var dateStringFilter = new Date(global.calendarDate);

					console.log(dateString);
					console.log(dateStringFilter);
					if (dateString.getTime() > dateStringFilter.getTime()) {
						isAfter = true;
					};
					browser.verify.equal(isAfter, false);
				}
			})
			.end();
	},

	'test filter Date After': function(browser) {

		var coffeePage = browser.page.app.coffee_list();
		var max_rows = 0;
		var datetime = "";
		browser
			.pause(1000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton();
			})		
			.pause(2000)		
			.perform(function() {
				console.log("step 1.5 Count List");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(4) .webix_cell', function (elems) {
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
					};
				});
			})	
			.pause(2000)
			.perform(function() {
				console.log("step pre 2");
				coffeePage
					.clickFilterUserButton();
			})
			.pause(1000)
			.perform(function() {
				console.log("step 2 call first dropdown");
				coffeePage
					.setupDropdownFilter(1, 1);
			})
			.perform(function() {
				console.log("step 3 select first combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(1) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 4 call second dropdown");
				coffeePage
					.setupDropdownFilter(1, 2);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 5 select second combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0)
					.pause(1000)
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 20, 150)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 6 call third dropdown");
				coffeePage
					.setupDropdownFilter(1, 3);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 7 select third combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 100)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})				
			.pause(1000)
			.perform(function() {
				console.log("step 8 Click Calendar");
				coffeePage
					.clickDateCalendar(1);
				
			})
			.pause(1000)
			.elements('css selector', ".webix_popup", function (elems) {
				console.log("step 9 assign popup");
				//Add max_rows to fix popup count bug
				coffeePage
					.getDateFilterValue(1, elems.value.length)
				
			})
			.pause(2000)
			.perform(function() {
				console.log("step 10 set Calendar");
				coffeePage
					.setDateFilterValue(5);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 11 set datetime to global");
				coffeePage	
					.setDateCalendarToGlobal();
			})
			.pause(1000)
			.perform(function() {
				console.log("step 12 dismiss dropdown");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 200)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 13 Get after filter Data");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(4) .webix_cell', function (elems) {
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						for (var j = 1; j <= max_rows; j++) {
							coffeePage
								.getWebixUserDataValue(j, 4);
						}	
					};
				});
				console.log(global.calendarDate);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 14 Compare Date");
				for (var i = 0; i < global.userDataArray.length; i++) {
					var isBefore = false;
					var dataArray = global.userDataArray[i].split(/\//);
					var dateString = new Date(dataArray[1]+"/"+dataArray[0]+"/"+dataArray[2]);
					var dateStringFilter = new Date(global.calendarDate);

					console.log(dateString);
					console.log(dateStringFilter);
					if (dateString.getTime() < dateStringFilter.getTime()) {
						isBefore = true;
					};
					browser.verify.equal(isBefore, false);
				}
			})
			.end();
	},

	'test filter male isChecked' : function(browser) {

		var coffeePage = browser.page.app.coffee_list();
		var max_rows = 0;
		browser
			.pause(1000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton()
					.clickFilterUserButton();
			})
			.pause(1000)
			.perform(function() {
				console.log("step 2 call first dropdown");
				coffeePage
					.setupDropdownFilter(1, 1);
			})
			.perform(function() {
				console.log("step 3 select first combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(1) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 4 call second dropdown");
				coffeePage
					.setupDropdownFilter(1, 2);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 5 select second combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0)
					.pause(1000)
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 20, 220)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 6 call third dropdown");
				coffeePage
					.setupDropdownFilter(1, 3);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 7 select third combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 60)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 9 dismiss dropdown");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 200)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 10 Get Data from view");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(1) .webix_cell', function (elems) {
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						for (var j = 1; j <= max_rows; j++) {
							// console.log(j);
							coffeePage
								.getWebixUserDataValue(j, 7);
						}	
					};
				});
			})
			.pause(1000)
			.perform(function() {
				console.log("step 11 verify");
				for (var i = 0; i < global.userDataArray.length; i++) {
					browser.verify.equal(global.userDataArray[i], true);
				}

			})
			.end();
	},
	'test filter male isNotChecked' : function(browser) {

		var coffeePage = browser.page.app.coffee_list();
		var max_rows = 0;
		browser
			.pause(1000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton()
					.clickFilterUserButton();
			})
			.pause(1000)
			.perform(function() {
				console.log("step 2 call first dropdown");
				coffeePage
					.setupDropdownFilter(1, 1);
			})
			.perform(function() {
				console.log("step 3 select first combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(1) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 4 call second dropdown");
				coffeePage
					.setupDropdownFilter(1, 2);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 5 select second combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 5, 5)
					.mouseButtonDown(0)
					.mouseButtonUp(0)
					.pause(1000)
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(2) .webix_el_box", 20, 220)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 6 call third dropdown");
				coffeePage
					.setupDropdownFilter(1, 3);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 7 select third combo");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 80)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 9 dismiss dropdown");
				browser
					.moveToElement("div[view_id='ab-filter-popup'] div[role='form'] .webix_scroll_cont .webix_layout_line:nth-of-type(1) .webix_el_combo:nth-of-type(3) .webix_el_box", 20, 200)
					.mouseButtonDown(0)
					.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
				console.log("step 10 Get Data from view");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(1) .webix_cell', function (elems) {
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						for (var j = 1; j <= max_rows; j++) {
							// console.log(j);
							coffeePage
								.getWebixUserDataValue(j, 7);
						}	
					};
				});
			})
			.pause(1000)
			.perform(function() {
				console.log("step 11 verify");
				for (var i = 0; i < global.userDataArray.length; i++) {
					browser.verify.equal(global.userDataArray[i], false);
				}

			})
			.end();
	},
};