var async = require('async');
require('../shared_libs/global_config.js');

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

	'Count layout and verify' : function(browser) {

		var appInterfacePage = browser.page.app_builder.interface_list();
		var maxPageInterface;
		var i = 1;
		var counter = 0;
		var syncronizing = false;
		var layoutArray = [];
		
		browser.elements('css selector', 'div[view_id="ab-interface-tree"] .ab-page-list-item', function (elems) {
			maxPageInterface = elems.value.length;
			global.interfaceSize = maxPageInterface;
			// console.log("maxPageInterface:" + maxPageInterface)
			while (i <= maxPageInterface) {
				if (!syncronizing) {
					syncronizing = true;
					async.series([
						function (next) {
							var j = 0;

							var childsyncronizing = false;
							appInterfacePage
								.selectInterface(i);
							global.webixIdArray.push([]);
							browser.pause(global.defaultwaittime);
							browser.elements('css selector', 'div[view_id="ab-interface-componentList"] .webix_list_item', function (eles) {
								// console.log(eles.value.length);
								if (eles.value.length > 0) {	
									for (var j = 1; j <= eles.value.length; j++) {
										appInterfacePage
											.getWebixLayoutId(j, counter);
									};
								};

								counter++;

							});

							next();
						},
						function (next) {
							i++;
							syncronizing = false;
						}
					], function (err) { 
						console.log("Some Error");
						browser.pause(500).end();
					});
				};
			}

		})
		.perform(function () {
			console.log(global.interfaceNameArray);
			console.log("Interface size : " + global.interfaceSize);
			console.log(global.webixIdArray);
			console.log("After this go to page App");
		})
		.pause(2000).end;
	}
};