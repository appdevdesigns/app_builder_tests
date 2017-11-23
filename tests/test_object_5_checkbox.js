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
	'test number Case 1 Checkbox': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(20);
		var Name = shared_func.randomTextInput(20);
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
				.selectAddNewColumnButton()
				.selectFieldTypeButton();
		})
		.pause(3000)
		.perform(function() {
			console.log("step 2 singleLineTextFieldType");
			coffeeObject
				.selectcheckboxFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterCheckboxLabelNameTextBox(labelname)
			.entercheckboxNameTextBox(Name)
			.checkboxDefault();

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
		.pause(2000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell div.ab-boolean-display .webix_table_checkbox', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdSelected(elems.value[lastObjItem-1].ELEMENT, function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value,true);
          				//console.log("result.value:" + JSON.stringify(result));
          				//browser.verify.ok(result.value, 'Checkbox is selected');
        			})


			})
		})
		.pause(2000)
		browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hs_center table tr td .webix_hcell span', function (elems) {
			console.log("Step 7 Verify Icon");
			var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize: "+ lastObjItem);

				browser.elementIdAttribute(elems.value[lastObjItem-1].ELEMENT,"class", function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value , "webix_icon fa-check-square-o");
          				///console.log("result.value:" + JSON.stringify(result));
        			})

			})		
		.pause(2000)	
		.end(); 
	},
	'test number Case 2 Checkbox': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(20);
		var Name = shared_func.randomTextInput(20);
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
				.selectAddNewColumnButton()
				.selectFieldTypeButton();
		})
		.pause(3000)
		.perform(function() {
			console.log("step 2 singleLineTextFieldType");
			coffeeObject
			.selectcheckboxFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterCheckboxLabelNameTextBox(labelname)
			.entercheckboxNameTextBox(Name)
					//.checkboxshowIconCheckBox()
					.checkboxDefault();


				})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell div.ab-boolean-display .webix_table_checkbox', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdSelected(elems.value[lastObjItem-1].ELEMENT, function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value,true);
          				//console.log("result.value:" + JSON.stringify(result));
          				//browser.verify.ok(result.value, 'Checkbox is selected');
        			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test number Case 3 Checkbox': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(20);
		var Name = shared_func.randomTextInput(20);
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
				.selectAddNewColumnButton()
				.selectFieldTypeButton();
		})
		.pause(3000)
		.perform(function() {
			console.log("step 2 checkboxFieldType");
			coffeeObject
				.selectcheckboxFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
				.enterCheckboxLabelNameTextBox(labelname)
				.entercheckboxNameTextBox(Name);
					//.checkboxshowIconCheckBox()
					//.checkboxDefault();


				})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell div.ab-boolean-display .webix_table_checkbox', function (elems) {

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdSelected(elems.value[lastObjItem-1].ELEMENT, function(result){
          				//browser.assert.equal(result.value,'text')
          				console.log("result.value: "+ result.value);
          				browser.assert.equal(result.value,false);
          				//console.log("result.value:" + JSON.stringify(result));
          				//browser.verify.ok(result.value, 'Checkbox is selected');
        			})


			})
		})
		.pause(2000)
		.end(); 
	},
	};