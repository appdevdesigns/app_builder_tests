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

	'test apply sort User email  A --- > Z': function(browser) {

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
				console.log("step 3 Click Filter User email");
				coffeePage
					.clickFillterUserEmail();
						
			})
			.pause(2000)
			.perform(function() {
				console.log("step 4 Get Value User email");
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
				console.log("step 5 Sorting Array");
				var sortEmail = [].concat(global.userEmailArray);
				sortEmail = sortEmail.sort(function (a, b) {
				    return a.toLowerCase().localeCompare(b.toLowerCase());
				});
				
				console.log(sortEmail);

				for (var j = 1; j <= sortEmail.length; j++) {
						console.log(sortEmail[j] + " : " + global.userEmailArray[j]);
					//	browser.assert.equal(sortEmail[j], global.userEmailArray[j]);
				}	
			})
			.perform(function() {
				console.log("step 6 verify");
				console.log(global.userEmailArray);
			})
			.pause(2000)
			.end(); 
	},
	'test apply sort User email  Z --- > A': function(browser) {

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
				console.log("step 3 Click Filter User email");
				coffeePage
					.clickFillterUserEmail();
						
			})
			.pause(2000)
			.perform(function() {
				console.log("step 4 Get Value User email");
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
				console.log("step 5 Sorting Array");
				var sortEmail = [].concat(global.userEmailArray);
				sortEmail = sortEmail.sort(function (a, b) {
				    return a.toLowerCase().localeCompare(b.toLowerCase());
				});
				
				console.log(sortEmail);
				sortEmail.reverse();

				for (var j = 1; j <= sortEmail.length; j++) {
						console.log(sortEmail[j] + " : " + global.userEmailArray[j]);
					//	browser.assert.equal(sortEmail[j], global.userEmailArray[j]);
				}	
			})
			.perform(function() {
				console.log("step 6 verify");
				console.log(global.userEmailArray);
			})
			.pause(2000)
			.end(); 
	},
	'test apply sort UserFirstname A --> Z': function(browser) {

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
				console.log("step 3 Click Filter UserFirstname");
				coffeePage
					.clickFillterUserFirstname();
						
			})
			.pause(2000)
			.perform(function() {
				console.log("step 4 Get Value UserFirstname");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(1) .webix_cell', function (elems) {
					// console.log(elems);
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							console.log(j);
							coffeePage
								.getWebixUserFirstNameValue(j);
						}	
					};
				});
					
			})			
			.pause(2000)
			.perform(function() {
				console.log("step 5 Sorting Array");
				var FirstName = [].concat(global.userFirstNameArray);
				FirstName = FirstName.sort(function (a, b) {
				    return a.toLowerCase().localeCompare(b.toLowerCase());
				});
				console.log(FirstName);

				for (var j = 1; j <= FirstName.length; j++) {
						console.log(FirstName[j] + " : " + global.userFirstNameArray[j]);
						//browser.assert.equal(FirstName[j], global.userFirstNameArray[j]);
				}	
			})
			.perform(function() {
				console.log("step 6 verify");
				console.log(global.userFirstNameArray);
			})
			.pause(2000)
			.end(); 
	},
	'test apply sort UserFirstname Z --> A': function(browser) {
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
				console.log("step 3 Click Filter UserFirstname");
				coffeePage
					.clickFillterUserFirstname();
						
			})
			.pause(2000)
			.perform(function() {
				console.log("step 4 Get Value UserFirstname");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(1) .webix_cell', function (elems) {
					// console.log(elems);
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							console.log(j);
							coffeePage
								.getWebixUserFirstNameValue(j);
						}	
					};
				});
					
			})			
			.pause(2000)
			.perform(function() {
				console.log("step 5 Sorting Array");
				var FirstName = [].concat(global.userFirstNameArray);
				FirstName = FirstName.sort(function (a, b) {
				    return a.toLowerCase().localeCompare(b.toLowerCase());
				});

				FirstName.reverse();
				console.log(FirstName);

				for (var j = 1; j <= FirstName.length; j++) {
						console.log(FirstName[j] + " : " + global.userFirstNameArray[j]);
						//browser.assert.equal(FirstName[j], global.userFirstNameArray[j]);
				}	
			})
			.perform(function() {
				console.log("step 6 verify");
				console.log(global.userFirstNameArray);
			})
			.pause(2000)
			.end(); 
	},
	'test apply sort UserLastname A --> Z': function(browser) {

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
				console.log("step 3 Click Filter UserLastname");
				coffeePage
					.clickFillterUserLastname();
						
			})
			.pause(2000)
			.perform(function() {
				console.log("step 4 Get Value UserLastname");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(1) .webix_cell', function (elems) {
					// console.log(elems);
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							console.log(j);
							coffeePage
								.getWebixUserLastnameValue(j);
						}	
					};
				});
					
			})			
			.pause(2000)
			.perform(function() {
				console.log("step 5 Sorting Array");
				var userLastname = [].concat(global.userLastnameArray);
				userLastname = userLastname.sort(function (a, b) {
				    return a.toLowerCase().localeCompare(b.toLowerCase());
				});

				console.log(userLastname);

				for (var j = 1; j <= userLastname.length; j++) {
						console.log(userLastname[j] + " : " + global.userLastnameArray[j]);
						//browser.assert.equal(userLastname[j], global.userLastnameArray[j]);
				}	

			})
			.perform(function() {
				console.log("step 6 verify");
				console.log(global.userLastnameArray);
			})
			.pause(2000)
			.end(); 
	},
	'test apply sort UserLastname Z --> A': function(browser) {

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
				console.log("step 3 Click Filter UserLastname");
				coffeePage
					.clickFillterUserLastname();
						
			})
			.pause(2000)
			.perform(function() {
				console.log("step 4 Get Value UserLastname");
				browser.elements('css selector', 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column:nth-of-type(1) .webix_cell', function (elems) {
					// console.log(elems);
					if (elems.value.length > 0) {	
						max_rows = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							console.log(j);
							coffeePage
								.getWebixUserLastnameValue(j);
						}	
					};
				});
					
			})			
			.pause(2000)
			.perform(function() {
				console.log("step 5 Sorting Array");
				var userLastname = [].concat(global.userLastnameArray);
				userLastname = userLastname.sort(function (a, b) {
				    return a.toLowerCase().localeCompare(b.toLowerCase());
				});
				

				userLastname.reverse();
				console.log(userLastname);

				for (var j = 1; j <= userLastname.length; j++) {
						console.log(userLastname[j] + " : " + global.userLastnameArray[j]);
						//browser.assert.equal(userLastname[j], global.userLastnameArray[j]);
				}	

			})
			.perform(function() {
				console.log("step 6 verify");
				console.log(global.userLastnameArray);
			})
			.pause(2000)
			.end(); 
	},
};