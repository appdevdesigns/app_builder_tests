var async = require('async');

module.exports = {
	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
			menuSection = browser.page.opsportal.menu();

		browser
			.maximizeWindow()
			.url(browser.launchUrl) // Go to http://localhost:1337/page/opsportal
			.waitForElementVisible('body', 1000); // Wait for the login page

		loginPage.passLogin(); // login

		menuSection.selectAppBuilder(); // Select app builder menu item
	},

/*	'Create Interface' : function (browser) {

		var appListPage = browser.page.app_builder.app_list();
		var appInterfacePage = browser.page.app_builder.interface_list();

		var interfaceAppName = 'Interface name ' + Math.random().toString(10).substring(3,6);
		var lastAppIndex;

		console.log("Name:" + interfaceAppName);
		async.series([
			// Get last item index
			function (next) {
				browser.elements('css selector', appListPage.elements.appItem.selector, function (elems) {
					lastAppIndex = elems.value.length;

					next();
				});
			},
			// Create a new page
			function (next) {
				appListPage.selectApp(lastAppIndex);

					appInterfacePage
					.selectInterfaceTab()
					.clickAddNewPageButton()
					.selectBlankPageTab()
					.enterPageName(interfaceAppName)
					.clickInterfaceSaveButton();

					browser.pause(5000).end();
				next();
			},
			], function (err) {
			browser.pause(500).end();
		});

	},*/

	'Select Menu components' : function (browser) {
		var appListPage = browser.page.app_builder.app_list();
		var appInterfacePage = browser.page.app_builder.interface_list();
		var lastNewPageIndex,lastAppIndex;
		async.series([
			// Get last item index
			function (next) {
				browser.elements('css selector', appListPage.elements.appItem.selector, function (elems) {
					lastAppIndex = elems.value.length;
					appListPage.selectApp(lastAppIndex);

					next();
				});
			},		
			function(next){

				browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
					lastNewPageIndex = elems.value.length;

					console.log("lIndex:"+lastNewPageIndex);
					
				});
						

					appInterfacePage
					.selectInterfaceTab()
					.selectInterface(0);

					next();
			},
			function(next){
				browser.pause(2000);
			browser.moveToElement('div[view_id="ab-component-space"]', 5, 15)
					.mouseButtonDown(0)
					.moveToElement('div[view_id="ab-interface-componentList"]',  5,  5) // Move to offset position of 200(x) 600(y)
	      			.mouseButtonUp(0);

	      			next();
			},
			//select menu component
			function(next){
				browser.pause(2000);
				browser.moveToElement('div[view_id="ab-component-space"]', 5, 45)
					.mouseButtonDown(0)
					.moveToElement('div[view_id="ab-interface-componentList"]',  5,  5) // Move to offset position of 200(x) 600(y)
	      			.mouseButtonUp(0);

	      			next();
			},
			function(next){
					//var appInterfacePage = browser.page.app_builder.interface_list();
					
			}
			], function (err) {
			browser.pause(500).end();
		});
	},

};