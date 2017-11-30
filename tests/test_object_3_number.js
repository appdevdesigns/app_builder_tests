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
	'test number Case 1 No format': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(5);
		var Name = shared_func.randomTextInput(5);

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
			.selectnumberFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(100);

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
	          				browser.assert.equal(result.value,100);
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
	          				browser.assert.equal(result.value , "webix_icon fa-hashtag");
	          				///console.log("result.value:" + JSON.stringify(result));
	          			})

				})		
		.end(); 
	},
	'test number Case 2 No Show Icon': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(1);
		var Name = shared_func.randomTextInput(1);
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
			.selectnumberFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(100)
						//.clickNumbershowIconCheckBox()
						.clickNumberRequiredCheckBox();
						

					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test number Case 3 No Require': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(1);
		var Name = shared_func.randomTextInput(1);
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
			.selectnumberFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.clickNumbershowIconCheckBox();
						//.clickNumberRequiredCheckBox();
						

					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test number Case 4 No Require No show icon': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(1);
		var Name = shared_func.randomTextInput(1);
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
			.selectnumberFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.clickNumbershowIconCheckBox()
			.clickNumberRequiredCheckBox();


		})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test number Case 5  Require and show icon': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(1);
		var Name = shared_func.randomTextInput(1);
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
			.selectnumberFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name);
						//.clickNumbershowIconCheckBox();
						//.clickNumberRequiredCheckBox();
						

					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test number Case 6  DefaultValue': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(1);
		var Name = shared_func.randomTextInput(1);
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
			.selectnumberFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(5);
						//.clickNumbershowIconCheckBox();
						//.clickNumberRequiredCheckBox();

					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test add new object 2': function (browser) {
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
	'test number Case 7 selectNumberFormatSelectDollar': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(1);
		var Name = shared_func.randomTextInput(1);

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
			.selectnumberFieldType();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(5)
			.numberFormatSelect()
			.selectNumberFormatSelectDollar();
						//.clickNumberRequiredCheckBox();

					})
		.pause(3000)
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
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
	          				//browser.assert.equal(result.value,'text')
	          				console.log("result.value: "+ result.value);
	          				browser.assert.equal(result.value,"$ 5");
	          				///console.log("result.value:" + JSON.stringify(result));
	          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test number Case 8 selectNumberFormatSelectPound': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(1);
		var Name = shared_func.randomTextInput(1);
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
			.selectnumberFieldType();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(5)
			.numberFormatSelect()
			.selectNumberFormatSelectPound();
						//.clickNumberRequiredCheckBox();

					})
		.pause(2000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(3000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
	          				//browser.assert.equal(result.value,'text')
	          				console.log("result.value: "+ result.value);
	          				browser.assert.equal(result.value,"£ 5");
	          				///console.log("result.value:" + JSON.stringify(result));
	          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test number Case 9 selectNumberFormatSelectEuroBefore': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(1);
		var Name = shared_func.randomTextInput(1);
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
			.selectnumberFieldType();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(5)
			.numberFormatSelect()
			.selectNumberFormatSelectEuroBefore();
						//.clickNumberRequiredCheckBox();

					})
		.pause(2000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(3000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
	          				//browser.assert.equal(result.value,'text')
	          				console.log("result.value: "+ result.value);
	          				browser.assert.equal(result.value,"€ 5");
	          				///console.log("result.value:" + JSON.stringify(result));
	          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test number Case 10 selectNumberFormatSelectEuroAfter': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(1);
		var Name = shared_func.randomTextInput(1);
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
			.selectnumberFieldType();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(5)
			.numberFormatSelect()
			.selectNumberFormatSelectEuroAfter();
						//.clickNumberRequiredCheckBox();

					})
		.pause(2000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(3000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
	          				//browser.assert.equal(result.value,'text')
	          				console.log("result.value: "+ result.value);
	          				browser.assert.equal(result.value,"5 €");
	          				///console.log("result.value:" + JSON.stringify(result));
	          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test number Case 11 selectNumberFormatSelectPercent': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(1);
		var Name = shared_func.randomTextInput(1);
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
			.selectnumberFieldType();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(5)
			.numberFormatSelect()
			.selectNumberFormatSelectPercent();
						//.clickNumberRequiredCheckBox();

					})
		.pause(2000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(3000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
	          				//browser.assert.equal(result.value,'text')
	          				console.log("result.value: "+ result.value);
	          				browser.assert.equal(result.value,"5 %");
	          				///console.log("result.value:" + JSON.stringify(result));
	          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test add new object 3': function (browser) {
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
	'test number Case 12 selectNumberDecimalSelectComma': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(5);
		var Name = shared_func.randomTextInput(5);
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
			.selectnumberFieldType();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(100)
			.selectNumberDecimalSelect();						

		})
		.pause(2000)
		.perform(function() {

			browser
			.moveToElement('div[view_id="$suggest4_list"]', 5, 55)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(2000)
		.perform(function() {
			coffeeObject
			.numberPlacesSelect()
			.numberPlacesOneSelect();
		})
		.pause(2000)
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
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
	          				//browser.assert.equal(result.value,'text')
	          				console.log("result.value: "+ result.value);
	          				browser.assert.equal(result.value,"100,0");
	          				///console.log("result.value:" + JSON.stringify(result));
	          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	
	'test number Case 13 selectNumberDecimalSelectPeriod': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(5);
		var Name = shared_func.randomTextInput(5);
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
			.selectnumberFieldType();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(100)
			.selectNumberDecimalSelect();
						//.selectNumberDecimalSelectPeriod();
						//.clickNumberRequiredCheckBox();

					})
		.pause(2000)
		.perform(function() {

			browser
			.moveToElement('div[view_id="$suggest4_list"]', 5, 85)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(2000)
		.perform(function() {
			coffeeObject
			.numberPlacesSelect()
			.numberPlacesOneSelect();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(3000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
	          				//browser.assert.equal(result.value,'text')
	          				console.log("result.value: "+ result.value);
	          				browser.assert.equal(result.value,"100.0");
	          				///console.log("result.value:" + JSON.stringify(result));
	          			})


			})
		})
		.pause(2000)
		.end(); 
	},

	'test number Case 14 selectNumberDecimalSelectSpace': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(5);
		var Name = shared_func.randomTextInput(5);
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
			.selectnumberFieldType();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(100)
			.selectNumberDecimalSelect();
						//.selectNumberDecimalSelectSpace();
						//.clickNumberRequiredCheckBox();

					})
		.pause(2000)
		.perform(function() {

			browser
			.moveToElement('div[view_id="$suggest4_list"]', 5, 119)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(2000)
		.perform(function() {
			coffeeObject
			.numberPlacesSelect()
			.numberPlacesOneSelect();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(3000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
	          				//browser.assert.equal(result.value,'text')
	          				console.log("result.value: "+ result.value);
	          				browser.assert.equal(result.value,"100 0");
	          				///console.log("result.value:" + JSON.stringify(result));
	          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test number Case 15 numberThousandsSelectComma': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(5);
		var Name = shared_func.randomTextInput(5);
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
			.selectnumberFieldType();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(2000);


		})
		.pause(3000)
		.perform(function() {
			console.log("step  numberThousandsSelect");
			coffeeObject
			.selectNumberThousandsSelect()
			.numberThousandsSelectComma();

		})
		.pause(2000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(3000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
	          				//browser.assert.equal(result.value,'text')
	          				console.log("result.value: "+ result.value);
	          				browser.assert.equal(result.value,"2,000");
	          				///console.log("result.value:" + JSON.stringify(result));
	          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test number Case 16 numberThousandsSelectPeriod': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(5);
		var Name = shared_func.randomTextInput(5);
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
			.selectnumberFieldType();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(2000);


		})
		.pause(3000)
		.perform(function() {
			console.log("step  numberThousandsSelect");
			coffeeObject
			.selectNumberThousandsSelect()
			.numberThousandsSelectPeriod();

		})
		.pause(2000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(3000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
	          				//browser.assert.equal(result.value,'text')
	          				console.log("result.value: "+ result.value);
	          				browser.assert.equal(result.value,"2.000");
	          				///console.log("result.value:" + JSON.stringify(result));
	          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test number Case 17 numberThousandsSelectSpace': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(5);
		var Name = shared_func.randomTextInput(5);
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
			.selectnumberFieldType();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterNumberLabelName(labelname)
			.enterNumberName(Name)
			.enterNumberDefaultValue(2000);


		})
		.pause(3000)
		.perform(function() {
			console.log("step  numberThousandsSelect");
			coffeeObject
			.selectNumberThousandsSelect()
			.numberThousandsSelectSpace();

		})
		.pause(2000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(3000)
		.perform(function() {
			browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll .webix_column div.webix_cell', function (elems) {
				console.log("Step 6 Verify ColumnValue");

				var lastObjItem = elems.value.length;
				console.log("getColumnValuesize: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));


				browser.elementIdText(elems.value[lastObjItem-1].ELEMENT, function(result){
	          				//browser.assert.equal(result.value,'text')
	          				console.log("result.value: "+ result.value);
	          				browser.assert.equal(result.value,"2 000");
	          				///console.log("result.value:" + JSON.stringify(result));
	          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	
};