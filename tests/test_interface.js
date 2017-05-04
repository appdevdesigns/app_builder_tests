var async = require('async');

module.exports = {
	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
			menuSection = browser.page.opsportal.menu(),
			appListPage = browser.page.app_builder.app_list(),
			appInterfacePage = browser.page.app_builder.interface_list();

		browser
		.maximizeWindow()
			.url(browser.launchUrl) // Go to http://localhost:1337/page/opsportal
			.waitForElementVisible('body', 1000); // Wait for the login page

		loginPage.passLogin(); // login

		menuSection.selectAppBuilder(); // Select app builder menu item

		appListPage.selectApp();

		appInterfacePage.selectInterfaceTab();
	},

/*	'Create Interface' : function (browser) {

		var appInterfacePage = browser.page.app_builder.interface_list();
		var interfaceAppName = 'Interface name ' + Math.random().toString(10).substring(3,6);

		console.log("Name:" + interfaceAppName);
		async.series([
			// Create a new page
			function (next) {
				appInterfacePage
					.clickAddNewPageButton()
					.selectBlankPageTab()
					.enterPageName(interfaceAppName)
					.clickInterfaceSaveButton()

				browser.pause(5000).end();
				next();
			},
			], function (err) {
			browser.pause(500).end();
		});

	},*/


	'Select Menu components' : function (browser) {
		var appInterfacePage = browser.page.app_builder.interface_list();
		var lastNewPageIndex;
		async.series([
			function (next){

				browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
					lastNewPageIndex = elems.value.length;

					console.log("lIndex:"+lastNewPageIndex);

					appInterfacePage
						.selectInterface(lastNewPageIndex);
					
				});


				next();
			},
			function (next){
				browser.pause(2000);
				browser.moveToElement('div[view_id="ab-component-space"]', 5, 17)
					.mouseButtonDown(0)
					.moveToElement('div[view_id="ab-interface-componentList"]',  5,  5) // Move to offset position of 200(x) 600(y)
					.mouseButtonUp(0)
					.pause(2000).end();

				next();	
			}
		], function (err) {
			browser.pause(500).end();
		});
	},
	'Select Grid components' : function (browser) {
		var appInterfacePage = browser.page.app_builder.interface_list();
		var lastNewPageIndex;

		async.series([
			// Get last item index
			function (next) {

					browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
						lastNewPageIndex = elems.value.length;

						console.log("lIndex:"+lastNewPageIndex);

						appInterfacePage
							.selectInterface(lastNewPageIndex);

					});


					next();
			},
			function (next){
				browser.pause(2000);
				browser.moveToElement('div[view_id="ab-component-space"]', 5, 51)
				.mouseButtonDown(0)
					.moveToElement('div[view_id="ab-interface-componentList"]',  5,  5) // Move to offset position of 200(x) 600(y)
					.mouseButtonUp(0)
					.pause(2000).end();

				next();
					
			}
		], function (err) {
				browser.pause(500).end();
		});		

	},
	'Select Form components' : function (browser) {
		var appInterfacePage = browser.page.app_builder.interface_list();
		var lastNewPageIndex;

		async.series([
			// Get last item index
			function (next) {
				browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
					lastNewPageIndex = elems.value.length;

						console.log("lIndex:"+lastNewPageIndex);
						appInterfacePage
							.selectInterface(lastNewPageIndex);

					});

					next();
			},
			function (next){
				browser.pause(2000);
				browser.moveToElement('div[view_id="ab-component-space"]', 5, 85)
				.mouseButtonDown(0)
					.moveToElement('div[view_id="ab-interface-componentList"]',  5,  5) // Move to offset position of 200(x) 600(y)
					.mouseButtonUp(0)
					.pause(2000).end();
					
			}
		], function (err) {
				browser.pause(500).end();
		});		


	},
	'Select View components' : function (browser) {
		var appInterfacePage = browser.page.app_builder.interface_list();
		var lastNewPageIndex;

		async.series([
			// Get last item index
			function (next) {
				browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
					lastNewPageIndex = elems.value.length;

					console.log("lIndex:"+lastNewPageIndex);
					appInterfacePage
						.selectInterface(lastNewPageIndex);

					});

					next();
			},
			function (next){
				browser.pause(2000);
				browser.moveToElement('div[view_id="ab-component-space"]', 5, 119)
				.mouseButtonDown(0)
					.moveToElement('div[view_id="ab-interface-componentList"]',  5,  5) // Move to offset position of 200(x) 600(y)
					.mouseButtonUp(0)
					.pause(2000).end();
					
			}
		], function (err) {
				browser.pause(500).end();
		});		


	},
	'Select Link components' : function (browser) {
		var appInterfacePage = browser.page.app_builder.interface_list();
		var lastNewPageIndex;

		async.series([
			// Get last item index
			function (next) {
				browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
					lastNewPageIndex = elems.value.length;

					console.log("lIndex:"+lastNewPageIndex);
					appInterfacePage
						.selectInterface(lastNewPageIndex);

				});

				next();
			},
			function (next){
				browser.pause(2000);
				browser.moveToElement('div[view_id="ab-component-space"]', 5, 153)
				.mouseButtonDown(0)
					.moveToElement('div[view_id="ab-interface-componentList"]',  5,  5) // Move to offset position of 200(x) 600(y)
					.mouseButtonUp(0)
					.pause(2000).end();
					
			}
		], function (err) {
				browser.pause(500).end();
		});		


	},
	'Select Tab components' : function (browser) {

		var appInterfacePage = browser.page.app_builder.interface_list();
		var lastNewPageIndex,lastAppIndex;

		async.series([
			// Get last item index
			function (next) {

				browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
					lastNewPageIndex = elems.value.length;

					console.log("lIndex:"+lastNewPageIndex);

					appInterfacePage
						.selectInterface(lastNewPageIndex);

				});

				next();

			},
			function (next){
				browser.pause(2000);
				browser.moveToElement('div[view_id="ab-component-space"]', 5, 187)
				.mouseButtonDown(0)
					.moveToElement('div[view_id="ab-interface-componentList"]',  5,  5) // Move to offset position of 200(x) 600(y)
					.mouseButtonUp(0)
					.pause(2000).end();
					
			}
		], function (err) {
				browser.pause(500).end();
		});		

	}

};