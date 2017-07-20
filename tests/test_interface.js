var async = require('async');

module.exports = {
  	'@disabled': true,
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

	'Create Interface' : function (browser) {

		var appInterfacePage = browser.page.app_builder.interface_list();
		var interfaceAppName;
		var countComponents = 6;
		var i = 1;


		while (i <= countComponents) {
			i++;
			interfaceAppName = 'Interface name ' + Math.random().toString(10).substring(3,6);
				appInterfacePage
					.clickAddNewPageButton()
					.selectBlankPageTab()
					.enterPageName(interfaceAppName)
					.clickInterfaceSaveButton();

					browser.pause(5000);

		}
		
		browser.pause(5000).end();
	},
	'Select All components' : function (browser) {
		var appInterfacePage = browser.page.app_builder.interface_list();

		var lastNewPageIndex;
		var i = 0;
		var countComponentIndex = 17;
		
		browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
			lastNewPageIndex = elems.value.length;
			//console.log(lastNewPageIndex);
			browser.pause(3000);

			appInterfacePage
			.selectInterface(lastNewPageIndex);
			browser.pause(3000);

			while (i <= lastNewPageIndex) {
				//console.log("start");

				browser.moveToElement('div[view_id="ab-components-list"]', 5, countComponentIndex)
				.mouseButtonDown(0)
						.moveToElement('div[view_id="ab-interface-componentList"]',  5,  5) // Move to offset position of 200(x) 600(y)
						.mouseButtonUp(0);

				i++;
				countComponentIndex += 34;

				browser.pause(3000);

				appInterfacePage
					.selectInterface(lastNewPageIndex - i);

				browser.pause(5000);
			}
			//browser.pause(1000).end();
		});
		
	},
			/*function (next){

				while (i <= lastNewPageIndex) {
					i++;

				browser.pause(2000);
				browser.moveToElement('div[view_id="ab-components-list"]', 5, countComponentIndex)
					.mouseButtonDown(0)
					.moveToElement('div[view_id="ab-interface-componentList"]',  5,  5) // Move to offset position of 200(x) 600(y)
					.mouseButtonUp(0)
					.pause(2000).end();

					countComponentIndex += 34;
				}

				next();	
			}
		], function (err) {
			browser.pause(500).end();
		});
	},
/*	'Select Grid components' : function (browser) {
		var appInterfacePage = browser.page.app_builder.interface_list();
		var lastNewPageIndex;

		async.series([
			// Get last item index
			function (next){

				browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
					lastNewPageIndex = elems.value.length;
					console.log(lastNewPageIndex);
					appInterfacePage
						.selectInterface(lastNewPageIndex - (lastNewPageIndex - 1));
					
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
			function (next){

				browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
					lastNewPageIndex = elems.value.length;
					console.log(lastNewPageIndex);
					appInterfacePage
						.selectInterface(lastNewPageIndex - (lastNewPageIndex - 2));
					
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
			function (next){

				browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
					lastNewPageIndex = elems.value.length;
					console.log(lastNewPageIndex);
					appInterfacePage
						.selectInterface(lastNewPageIndex - (lastNewPageIndex - 3));
					
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
			function (next){

				browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
					lastNewPageIndex = elems.value.length;
					console.log(lastNewPageIndex);
					appInterfacePage
						.selectInterface(lastNewPageIndex - (lastNewPageIndex - 4));
					
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
			function (next){

				browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
					lastNewPageIndex = elems.value.length;
					console.log(lastNewPageIndex);
					appInterfacePage
						.selectInterface(lastNewPageIndex - (lastNewPageIndex - 5));
					
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

	}*/

};