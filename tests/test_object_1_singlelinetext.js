var async = require('async');
var shared_func = require('../shared_libs/shared_function.js');
module.exports = {

	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
		menuSection = browser.page.opsportal.menu();

		browser
			.url(browser.launchUrl) // Go to http://localhost:1337/page/opsportal
			.waitForElementVisible('body', 1000); // Wait for the login page

		loginPage.passLogin(); // login

		menuSection.selectAppBuilder(); // Select app builder menu item

		menuSection.selectTestCoffeeShop();
	},

	'test single line text Case 1 All Data': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(20);
		var Name = shared_func.randomTextInput(20);

		browser
		.perform(function() {
			console.log("step 1 selectObjectTest selectAddNewColumnButton selectFieldTypeButton");
			coffeeObject
			.selectObjectTest()
			.selectAddNewColumnButton()
			.selectFieldTypeButton();
		})
		.pause(3000)
		.perform(function() {
			console.log("step 2 singleLineTextFieldType");
			coffeeObject
			.selectsingleLineTextFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterLabelName(labelname)
			.enterName(Name)
						//.clickShowIcon()
						.enterDefaultName("testdefaultname")
						//.clickSupportMultilingual();

					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hcell', function (elems) {
			console.log("Step 5 Verify ColumnHeader");

			var lastObjItem = elems.value.length - 2;
			console.log("getColumnValuesize: "+ lastObjItem);
				//browser.verify.equal(ColumnHeaderValue, labelname);
				var self = this,
				// deferred = Q.defer(),
				itemSelector = 'td[column="#index#"] .webix_hcell';

				itemSelector = itemSelector.replace('#index#', lastObjItem);

				browser.getText(itemSelector, function(result) {
					console.log("getColumnHeaderValue55:" + result.value);
				    //browser.verify.equal(labelname, result.value);
				    browser.assert.equal(result.value , labelname );
				});

			})		
		.pause(2000)	
		.elements('css selector', '.webix_ss_center_scroll .webix_column', function (elems) {
			console.log("Step 6 Verify Value");
			var lastObjItem = elems.value.length - 2;
				//console.log("getColumnValuesize: "+ lastObjItem);
				//browser.verify.equal(ColumnHeaderValue, labelname);
				var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[column="#index#"] .webix_cell';

				itemSelector = itemSelector.replace('#index#', lastObjItem);

				browser.getText(itemSelector, function(result) {
				    //console.log("getColumnHeaderValue55:" + result.value);
				    browser.assert.equal(result.value , "testdefaultname");
				});
//
})			
		.pause(2000)
		.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hcell', function (elems) {
			console.log("Step 7 Verify Icon");
			var lastObjItem = elems.value.length - 2;
				//console.log("getColumnValuesize: "+ lastObjItem);
				//browser.verify.equal(ColumnHeaderValue, labelname);
				var self = this,
				// deferred = Q.defer(),
				itemSelector = 'td[column="#index#"] .webix_hcell span';

				itemSelector = itemSelector.replace('#index#', lastObjItem);


				browser.getAttribute(itemSelector, "class", function(result) {
					console.log("class55: " + result.value);
					browser.assert.equal(result.value , "webix_icon fa-font");
				  //browser.expect.element(result).to.be.a('span');
				});

			})			
		.pause(2000)
		.end(); 
	},
	'test single line text Case 2 No All Data': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(20);
		var Name = shared_func.randomTextInput(20);
		browser
		.perform(function() {
			console.log("step 1 selectObjectTest selectAddNewColumnButton selectFieldTypeButton");
			coffeeObject
			.selectObjectTest()
			.selectAddNewColumnButton()
			.selectFieldTypeButton();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 2 singleLineTextFieldType");
			coffeeObject
			.selectsingleLineTextFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterLabelName(labelname)
			.enterName(Name);
						//.clickShowIcon()
						//.enterDefaultName("testdefaultname")
						//.clickSupportMultilingual();

					})
		.pause(2000)
		.perform(
			function() {
				console.log("step 4 addColumn");
				coffeeObject
				.addColumnButton();

			})
		.pause(2000)
		.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hcell', function (elems) {
			console.log("Step 5 Verify ColumnHeader");

			var lastObjItem = elems.value.length - 2;
			console.log("getColumnValuesize: "+ lastObjItem);
				//browser.verify.equal(ColumnHeaderValue, labelname);
				var self = this,
				// deferred = Q.defer(),
				itemSelector = 'td[column="#index#"] .webix_hcell';

				itemSelector = itemSelector.replace('#index#', lastObjItem);

				browser.getText(itemSelector, function(result) {
					console.log("getColumnHeaderValue55:" + result.value);
				    //browser.verify.equal(labelname, result.value);
				    browser.assert.equal(result.value , labelname );
				});

			})		
		.pause(2000)
		.end(); 
	},
	'test single line text Case 3 No Multiligual Checkbox': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(20);
		var Name = shared_func.randomTextInput(20);
		browser
		.perform(function() {
			console.log("step 1 selectObjectTest selectAddNewColumnButton selectFieldTypeButton");
			coffeeObject
			.selectObjectTest()
			.selectAddNewColumnButton()
			.selectFieldTypeButton();
		})
		.pause(3000)
		.perform(function() {
			console.log("step 2 singleLineTextFieldType");
			coffeeObject
			.selectsingleLineTextFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterLabelName(labelname)
			.enterName(Name)
			.clickShowIcon()
			.enterDefaultName("testdefaultname")
						//.clickSupportMultilingual();

					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hcell', function (elems) {
			console.log("Step 5 Verify ColumnHeader");

			var lastObjItem = elems.value.length - 2;
			console.log("getColumnValuesize: "+ lastObjItem);
				//browser.verify.equal(ColumnHeaderValue, labelname);
				var self = this,
				// deferred = Q.defer(),
				itemSelector = 'td[column="#index#"] .webix_hcell';

				itemSelector = itemSelector.replace('#index#', lastObjItem);

				browser.getText(itemSelector, function(result) {
					console.log("getColumnHeaderValue55:" + result.value);
				    //browser.verify.equal(labelname, result.value);
				    browser.assert.equal(result.value , labelname );
				});

			})		
		.pause(2000)
		.elements('css selector', '.webix_ss_center_scroll .webix_column', function (elems) {
			console.log("Step 6 Verify Value");
			var lastObjItem = elems.value.length - 2;
				//console.log("getColumnValuesize: "+ lastObjItem);
				//browser.verify.equal(ColumnHeaderValue, labelname);
				var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[column="#index#"] .webix_cell';

				itemSelector = itemSelector.replace('#index#', lastObjItem);

				browser.getText(itemSelector, function(result) {
				    //console.log("getColumnHeaderValue55:" + result.value);
				    browser.assert.equal(result.value , "testdefaultname");
				});
//
})		
		.pause(2000)	
		.end(); 
	},
	'test single line text Case 4 No Show Icon Checkbox': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(20);
		var Name = shared_func.randomTextInput(20);
		browser
		.perform(function() {
			console.log("step 1 selectObjectTest selectAddNewColumnButton selectFieldTypeButton");
			coffeeObject
			.selectObjectTest()
			.selectAddNewColumnButton()
			.selectFieldTypeButton();
		})
		.pause(3000)
		.perform(function() {
			console.log("step 2 singleLineTextFieldType");
			coffeeObject
			.selectsingleLineTextFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterLabelName(labelname)
			.enterName(Name)
						//.clickShowIcon()
						.enterDefaultName("testdefaultname")
						.clickSupportMultilingual();

					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hcell', function (elems) {
			console.log("Step 5 Verify ColumnHeader");

			var lastObjItem = elems.value.length - 2;
			console.log("getColumnValuesize: "+ lastObjItem);
				//browser.verify.equal(ColumnHeaderValue, labelname);
				var self = this,
				// deferred = Q.defer(),
				itemSelector = 'td[column="#index#"] .webix_hcell';

				itemSelector = itemSelector.replace('#index#', lastObjItem);

				browser.getText(itemSelector, function(result) {
					console.log("getColumnHeaderValue55:" + result.value);
				    //browser.verify.equal(labelname, result.value);
				    browser.assert.equal(result.value , labelname );
				});

			})		
		.pause(2000)	
		.elements('css selector', '.webix_ss_center_scroll .webix_column', function (elems) {
			console.log("Step 6 Verify Value");
			var lastObjItem = elems.value.length - 2;
				//console.log("getColumnValuesize: "+ lastObjItem);
				//browser.verify.equal(ColumnHeaderValue, labelname);
				var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[column="#index#"] .webix_cell';

				itemSelector = itemSelector.replace('#index#', lastObjItem);

				browser.getText(itemSelector, function(result) {
				    //console.log("getColumnHeaderValue55:" + result.value);
				    browser.assert.equal(result.value , "testdefaultname");
				});
//
})			
		.pause(2000)
		.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hcell', function (elems) {
			console.log("Step 7 Verify Icon");
			var lastObjItem = elems.value.length - 2;
				//console.log("getColumnValuesize: "+ lastObjItem);
				//browser.verify.equal(ColumnHeaderValue, labelname);
				var self = this,
				// deferred = Q.defer(),
				itemSelector = 'td[column="#index#"] .webix_hcell span';

				itemSelector = itemSelector.replace('#index#', lastObjItem);


				browser.getAttribute(itemSelector, "class", function(result) {
					console.log("class55: " + result.value);
					browser.assert.equal(result.value , "webix_icon fa-font");
				  //browser.expect.element(result).to.be.a('span');
				});

			})			
		.pause(2000)		
		.end(); 
	},
	'test single line text Case 5 No Show Icon and SupportMultilingual  Checkbox': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(20);
		var Name = shared_func.randomTextInput(20);
		browser
		.perform(function() {
			console.log("step 1 selectObjectTest selectAddNewColumnButton selectFieldTypeButton");
			coffeeObject
			.selectObjectTest()
			.selectAddNewColumnButton()
			.selectFieldTypeButton();
		})
		.pause(3000)
		.perform(function() {
			console.log("step 2 singleLineTextFieldType");
			coffeeObject
			.selectsingleLineTextFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterLabelName(labelname)
			.enterName(Name)
			.clickShowIcon()
			.enterDefaultName("testdefaultname")
			.clickSupportMultilingual();

		})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hcell', function (elems) {
			console.log("Step 5 Verify ColumnHeader");

			var lastObjItem = elems.value.length - 2;
			console.log("getColumnValuesize: "+ lastObjItem);
				//browser.verify.equal(ColumnHeaderValue, labelname);
				var self = this,
				// deferred = Q.defer(),
				itemSelector = 'td[column="#index#"] .webix_hcell';

				itemSelector = itemSelector.replace('#index#', lastObjItem);

				browser.getText(itemSelector, function(result) {
					console.log("getColumnHeaderValue55:" + result.value);
				    //browser.verify.equal(labelname, result.value);
				    browser.assert.equal(result.value , labelname );
				});

			})		
		.pause(2000)	
		.elements('css selector', '.webix_ss_center_scroll .webix_column', function (elems) {
			console.log("Step 6 Verify Value");
			var lastObjItem = elems.value.length - 2;
				//console.log("getColumnValuesize: "+ lastObjItem);
				//browser.verify.equal(ColumnHeaderValue, labelname);
				var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[column="#index#"] .webix_cell';

				itemSelector = itemSelector.replace('#index#', lastObjItem);

				browser.getText(itemSelector, function(result) {
				    //console.log("getColumnHeaderValue55:" + result.value);
				    browser.assert.equal(result.value , "testdefaultname");
				});
//
})			
		.pause(2000)
		.end(); 
	},

	};