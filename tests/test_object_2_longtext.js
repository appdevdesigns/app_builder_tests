var async = require('async');
var shared_func = require('../shared_libs/shared_function.js');
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

		menuSection.selectTestCoffeeShop();
	},
	'test add new object': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var enternamenewobject = shared_func.randomTextInput(10);

		browser.elements('css selector', 'div[view_id^="ab_work_object_list_editlist"] .webix_scroll_cont .webix_list_item', function (elems) {

				var lastObjItem = elems.value.length;
				enternamenewobject = lastObjItem + 1;

	})

		browser
		.perform(function() {
			coffeeObject
				.clickAddNewObject()
				.enterBlankObjectName(enternamenewobject)
				.saveBlankObject();

		})
		.pause(2000)
		.end(); 

	},
	'test long  text Case 1 All Data': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(5);
		var Name = shared_func.randomTextInput(5);
		var testdefaultvalue = "testdefaultvalue";

		browser
		.perform(function() {
			console.log("step 1 selectObjectTest ");
			browser.elements('css selector', 'div[view_id^="ab_work_object_list_editlist"] .webix_scroll_cont .webix_list_item', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("step 1 lastObjItem: " + lastObjItem);
				coffeeObject
					.selectObject(lastObjItem+1);

			})
		})
		.pause(2000)
		.perform(function() {
			console.log("step 1.1 selectObjectTest selectAddNewColumnButton selectFieldTypeButton");
			coffeeObject
				.selectAddNewColumnButton()
				.selectFieldTypeButton();
		})
		.pause(3000)
		.perform(function() {
			console.log("step 2 singleLineTextFieldType");
			coffeeObject
				.selectlongTextFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterlongTextLabelName(labelname)
			.enterlongTextName(Name)
						//.clicklongTextShowIcon()
						.enterlongTextDefaultName(testdefaultvalue);
						//.clicklongTextSupportMultilingual();

					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(5000)
		.perform(function() {
			console.log("step 4-1 clickAddNewRowButton");
			coffeeObject
				.clickAddNewRowButton();
		})
		.pause(5000)
		.perform(function() {
			console.log("step 5 ColumnHeader");

			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hs_center table tr td .webix_hcell', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.value:" + JSON.stringify(elems.value[lastObjItem-1].ELEMENT));

				 browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value,labelname);
          				///console.log("result.value:" + JSON.stringify(result));
        			})

			})

		})
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value,testdefaultvalue);
          				///console.log("result.value:" + JSON.stringify(result));
        			})


			})
		})
		browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hs_center table tr td .webix_hcell span', function (elems) {
			console.log("Step 7 Verify Icon");
			var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize: "+ lastObjItem);

				browser.elementIdAttribute(elems.value[lastObjItem-1].ELEMENT,"class", function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value , "webix_icon fa-align-right");
          				///console.log("result.value:" + JSON.stringify(result));
        			})

			})			
		.pause(2000)
		.end(); 
	},

	'test long  text Case 2 No Data': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var testdefaultvalue = "ab";

		browser
		.perform(function() {
			console.log("step 1 selectObjectTest ");
			browser.elements('css selector', 'div[view_id^="ab_work_object_list_editlist"] .webix_scroll_cont .webix_list_item', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("step 1 lastObjItem: " + lastObjItem);
				coffeeObject
					.selectObject(lastObjItem+1);

			})
		})
		.pause(2000)
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
			.selectlongTextFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterlongTextLabelName(labelname)
			.enterlongTextName(Name);
						//.clicklongTextShowIcon()
						//.enterlongTextDefaultName("testlongTextdefaultname")
						//.clicklongTextSupportMultilingual();

					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.perform(function() {
			console.log("step 5 ColumnHeader");

			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hs_center table tr td .webix_hcell', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.value:" + JSON.stringify(elems.value[lastObjItem-1].ELEMENT));

				 browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value,labelname);
          				///console.log("result.value:" + JSON.stringify(result));
        			})

			})

		})
		.pause(2000)
		.end(); 
	},

	'test long  text Case 3 No Show Icon Checkbox': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var testdefaultvalue = "ab";

		browser
		.perform(function() {
			console.log("step 1 selectObjectTest ");
			browser.elements('css selector', 'div[view_id^="ab_work_object_list_editlist"] .webix_scroll_cont .webix_list_item', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("step 1 lastObjItem: " + lastObjItem);
				coffeeObject
					.selectObject(lastObjItem+1);

			})
		})
		.pause(2000)
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
			.selectlongTextFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterlongTextLabelName(labelname)
			.enterlongTextName(Name)
			.clicklongTextShowIcon()
			.enterlongTextDefaultName(testdefaultvalue);
						//.clicklongTextSupportMultilingual();

					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.perform(function() {
			console.log("step 5 ColumnHeader");

			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hs_center table tr td .webix_hcell', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.value:" + JSON.stringify(elems.value[lastObjItem-1].ELEMENT));

				 browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value,labelname);
          				///console.log("result.value:" + JSON.stringify(result));
        			})

			})

		})
		.pause(2000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value,testdefaultvalue);
          				///console.log("result.value:" + JSON.stringify(result));
        			})


			})
		})	
		.pause(2000)
		.end(); 
	},

	'test long  text Case 4 No Mulltilingual Checkbox': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var testdefaultvalue = "ab";

		browser
		.perform(function() {
			console.log("step 1 selectObjectTest ");
			browser.elements('css selector', 'div[view_id^="ab_work_object_list_editlist"] .webix_scroll_cont .webix_list_item', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("step 1 lastObjItem: " + lastObjItem);
				coffeeObject
					.selectObject(lastObjItem+1);

			})
		})
		.pause(2000)
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
			.selectlongTextFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterlongTextLabelName(labelname)
			.enterlongTextName(Name)
						//.clicklongTextShowIcon()
						.enterlongTextDefaultName(testdefaultvalue)
						.clicklongTextSupportMultilingual();

					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.perform(function() {
			console.log("step 5 ColumnHeader");

			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hs_center table tr td .webix_hcell', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.value:" + JSON.stringify(elems.value[lastObjItem-1].ELEMENT));

				 browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value,labelname);
          				///console.log("result.value:" + JSON.stringify(result));
        			})

			})

		})
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value,testdefaultvalue);
          				///console.log("result.value:" + JSON.stringify(result));
        			})


			})
		})
		.end(); 
	},

	'test long  text Case 5 No Mulltilingual and  ShowIcon Checkbox  ': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var testdefaultvalue = "ab";

		browser
		.perform(function() {
			console.log("step 1 selectObjectTest ");
			browser.elements('css selector', 'div[view_id^="ab_work_object_list_editlist"] .webix_scroll_cont .webix_list_item', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("step 1 lastObjItem: " + lastObjItem);
				coffeeObject
					.selectObject(lastObjItem+1);

			})
		})
		.pause(2000)
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
			.selectlongTextFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterlongTextLabelName(labelname)
			.enterlongTextName(Name)
						//.clicklongTextShowIcon()
						.enterlongTextDefaultName(testdefaultvalue)
						//.clicklongTextSupportMultilingual();

					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.perform(function() {
			console.log("step 5 ColumnHeader");

			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hs_center table tr td .webix_hcell', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.value:" + JSON.stringify(elems.value[lastObjItem-1].ELEMENT));

				 browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value,labelname);
          				///console.log("result.value:" + JSON.stringify(result));
        			})

			})

		})
		.pause(2000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value,testdefaultvalue);
          				///console.log("result.value:" + JSON.stringify(result));
        			})


			})
		})
		.end(); 
	},
	/*'test long  text Case 6 cancel  ': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();

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
						.selectlongTextFieldType();
			})
			.perform(function() {
				console.log("step 4 cancelAddNewColumnButton");
					coffeeObject
						.cancelAddNewColumnButton();

			})
			.pause(2000)
			.end(); 
		},*/

		
	};