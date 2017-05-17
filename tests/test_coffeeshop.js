var async = require('async');


module.exports = {
	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login();
			
			

		browser
			.url(browser.launchUrl) // Go to http://localhost:1337/page/opsportal
			.maximizeWindow()
			.waitForElementVisible('body', 1000); // Wait for the login page

		loginPage.passLogin(); // login

		
	},
	'menuCoffeeSection': function (browser) {

			var menuCoffeeSection =	browser.page.app_builder.coffee_list();
			menuCoffeeSection.selectCoffeeShop();
			

			browser.pause(5000);

			console.log("start: menuCoffeeSection");
			browser.elements('css selector', 'div[view_id="ab_live_item_13_28"] .webix_scroll_cont .webix_list_item', function (elems) {

				
				browser.getText('div[view_id="ab_live_item_13_28"] .webix_scroll_cont .webix_list_item', function(result) {
				  
				  console.log(result);

				});

			});

			//browser.getText('div[view_id="ab_live_item_13_28"] .webix_scroll_cont .webix_list_item',function(result) {
			//  
			//  console.log(result.value);
			//});
	}


};