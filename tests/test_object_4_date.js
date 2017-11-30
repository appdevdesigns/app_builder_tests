	var async = require('async');
	var shared_func = require('../shared_libs/shared_function.js');
	module.exports = {

		beforeEach: function (browser) {
			var loginPage = browser.page.opsportal.login(),
			menuSection = browser.page.opsportal.menu();

			browser
				.url(browser.launchUrl) // Go to http://localhost:1337/page/opsportal
				.waitForElementVisible('body', 1000)
				.maximizeWindow(); // Wait for the login page

			loginPage.passLogin(); // login

			menuSection.selectAppBuilder(); // Select app builder menu item

			menuSection.selectTestCoffeeShop();
		},

	//----> Case Normal 
	/*'test add new object': function (browser) {
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
	'test date Case 1 date': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.pause(2000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name);
			//.dateShowIconCheckBox()
			//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							//.dateSetCurrentdateDefaultValue();


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
		browser.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header .webix_hs_center table tr td .webix_hcell span', function (elems) {
			console.log("Step 7 Verify Icon");
			var lastObjItem = elems.value.length;
						//console.log("getColumnValuesize: "+ lastObjItem);

						browser.elementIdAttribute(elems.value[lastObjItem-1].ELEMENT,"class", function(result){
		          				//browser.assert.equal(result.value,'text')
		          				console.log("result.value: "+ result.value);
		          				browser.assert.equal(result.value , "webix_icon fa-calendar");
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})

					})		
		.end(); 
	},
	'test date Case 2 date': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";
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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							
							.dateIncludeTimeCheckBox();
							//.dateSetCurrentdateDefaultValue();


						})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000)
							.moveToElement('span.webix_cal_icon_today', 1, 1)
							.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				//browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},



	//---->Case Day 

	'test date Case 6 date dateDayFormatPercentJ': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.pause(3000)
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateSetCurrentdateDefaultValue()
							//.checkboxshowIconCheckBox()
							.dateDayItem()
							.dateDayFormat()
							.dateDayFormatPercentJ();


						})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000)
							.moveToElement('span.webix_cal_icon_today', 1, 1)
							.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case 7 date dateDayFormatPercentd': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateDayItem()
							.dateDayFormat()
							.dateDayFormatPercentd();


		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000)
							.moveToElement('span.webix_cal_icon_today', 1, 1)
							.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000);
		})
		.pause(3000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000)
							.moveToElement('span.webix_cal_icon_today', 1, 1)
							.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case 8 date dateDayFormatPercentD': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateDayItem()
							.dateDayFormat()
							.dateDayFormatPercentD();


						})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000)
							.moveToElement('span.webix_cal_icon_today', 1, 1)
							.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case 9 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateDayItem()
							.dateDayFormat()
							.dateDayFormatPercentl();


						})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000)
							.moveToElement('span.webix_cal_icon_today', 1, 1)
							.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
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

	},*/
	/*'test date Case 9 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateDayItem();


		})
		.pause(5000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-day-order"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(5000)
		.perform(function() {
			coffeeObject
			.dateDayPlaces1();	
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000)
							.moveToElement('span.webix_cal_icon_today', 1, 1)
							.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case 10 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateDayItem();

						})
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-day-order"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayPlaces2();	
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000)
							.moveToElement('span.webix_cal_icon_today', 1, 1)
							.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case 11 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateDayItem();

						})
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-day-order"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayPlaces3();	
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000)
							.moveToElement('span.webix_cal_icon_today', 1, 1)
							.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},*/
	/*'test date Case 12 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateDayItem()
							.dateDayFormatCommaRadio();

						})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case 13 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateDayItem()
							.dateDayFormatSlashdio();

						})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case 14 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateDayItem()
							.dateDayFormatSpaceRadio();

						})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case 15 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateDayItem()
							.dateDayFormatDashRadio();

						})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case 16 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateDayItem()
							.dateDayFormatColonRadio();

						})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},*/
	//-----> end case Day 

	//----->  case Month
	/*'test add new object month 1': function (browser) {
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
	'test date Case Month 1 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateMonthItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-month-format"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateMonthFormatPercentn();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Month 2 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateMonthItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-month-format"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateMonthFormatPercentm();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Month 3 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateMonthItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-month-format"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateMonthFormatPercentM();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Month 4 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateMonthItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-month-format"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateMonthFormatPercentF();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Month 5 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateMonthItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-month-order"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateMonthPlaces1();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test add new object month 2': function (browser) {
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
	'test date Case Month 6 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateMonthItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-month-order"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateMonthPlaces2();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Month 7 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateMonthItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-month-order"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateMonthPlaces3();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Month 8 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateMonthItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayFormatCommaRadio();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Month 9 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateMonthItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayFormatSlashdio();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test add new object month 3': function (browser) {
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
	'test date Case Month 10 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateMonthItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayFormatSpaceRadio();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Month 11 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateMonthItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayFormatDashRadio();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Month 12 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateMonthItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayFormatColonRadio();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},*/
	//---> end case month*/

	//---> case year
	/*'test add new object year 1': function (browser) {
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
	'test date Case Year 1 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateYearItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-year-format"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateYearFormatPercenty();
		})
				.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayFormatDashRadio();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Year 2 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateYearItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-year-format"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateYearFormatPercentY();
		})
				.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayFormatDashRadio();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Year 3 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateYearItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-year-format"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateYearFormatPercentY();
		})
				.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayFormatDashRadio();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Year 4 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateYearItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-year-order"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateYearPlaces1();
		})
				.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayFormatDashRadio();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Year 5 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateYearItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-year-order"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateYearPlaces2();
		})
				.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayFormatDashRadio();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},
	'test date Case Year 6 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							//.checkboxshowIconCheckBox()
							.dateYearItem();
							//.dateMonthFormat()
							//.dateMonthFormatPercentn();


						})
		.pause(1000)
		.perform(function() {
			browser.moveToElement('div[view_id^="date_ab-date-year-order"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0);
		})
		.pause(1000)
		.perform(function() {
			coffeeObject
			.dateYearPlaces3();
		})
				.pause(1000)
		.perform(function() {
			coffeeObject
			.dateDayFormatDashRadio();
		})
		.pause(2000)
		.perform(function(){
			browser.moveToElement('div[view_id^="date_ab-date-default"] .webix_inp_static', 5, 5)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000)
			.moveToElement('span.webix_cal_icon_today', 1, 1)
			.mouseButtonDown(0)
			.mouseButtonUp(0)
			.pause(2000);
		})
		.pause(3000)
		.perform(function() {
			console.log("get value date");
			browser.elements('css selector', 'div[view_id^="date_ab-date-display"]', function (elems) {
				var lastObjItem = elems.value.length;
				//console.log("getColumnValuesize66: "+ lastObjItem);

				console.log("result.elems:" + JSON.stringify(elems));

				browser.elementIdText(elems.value[lastObjItem - 1].ELEMENT, function(result){
			   		//console.log("result:" + result.value);
			   		dateDefault = result.value;
			   	});
			})
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
		          				browser.assert.equal(result.value,dateDefault);
		          				///console.log("result.value:" + JSON.stringify(result));
		          			})


			})
		})
		.pause(2000)
		.end(); 
	},*/

	//---> end case year
	'test add new object year 1': function (browser) {
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
	'test date Case dateRangeCondition 6 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							//.dateIncludeTimeCheckBox()
							.validateCondition()
							.dateRangeCondition();


						})
		.pause(1000)
		.perform(function() {
						//browser.moveToElement('div[view_id^="date_ab-date-validate-range-before"] .webix_slider_handle', 0, 0)
						//		.mouseButtonDown(0)
						//		.moveToElement('div[view_id^="date_ab-date-validate-range-before"] .webix_slider_right', 0, 20)
						//		.mouseButtonUp(0);
					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	/*'test date Case betweenCondition  date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							.dateIncludeTimeCheckBox()
							.validateCondition()
							.betweenCondition();


						})
		.pause(1000)
		.perform(function() {
						//startdate 01/01/2016
						browser.moveToElement('div[view_id^="date_ab-date-validate-start-date"] .webix_inp_static', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="7"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="0"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[aria-label="01 January 2016"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000);


					})
		.pause(1000)
		.perform(function() {
						//enddate 01/01/2016

						browser.moveToElement('div[view_id^="date_ab-date-validate-end-date"] .webix_inp_static', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[view_id="$suggest18"] .webix_cal_month_name', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[view_id="$suggest18"] .webix_cal_month_name', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="7"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="11"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[aria-label="31 December 2016"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000);


					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test date Case notBetweenCondition  date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							.dateIncludeTimeCheckBox()
							.validateCondition()
							.notBetweenCondition();


						})
		.pause(1000)
		.perform(function() {
						//startdate 01/01/2016
						browser.moveToElement('div[view_id^="date_ab-date-validate-start-date"] .webix_inp_static', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="7"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="0"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[aria-label="01 January 2016"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000);


					})
		.pause(1000)
		.perform(function() {
						//enddate 01/01/2016

						browser.moveToElement('div[view_id^="date_ab-date-validate-end-date"] .webix_inp_static', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[view_id="$suggest18"] .webix_cal_month_name', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[view_id="$suggest18"] .webix_cal_month_name', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="7"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="11"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[aria-label="31 December 2016"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000);


					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test date Case equalCondition 6 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							.dateIncludeTimeCheckBox()
							.validateCondition()
							.equalCondition();


						})
		.pause(1000)
		.perform(function() {
						//startdate 01/01/2016
						browser.moveToElement('div[view_id^="date_ab-date-validate-start-date"] .webix_inp_static', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="7"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="0"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[aria-label="01 January 2016"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000);


					})
		.pause(1000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test date Case notEqualCondition 6 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		var dateDefault = "";

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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							.dateIncludeTimeCheckBox()
							.validateCondition()
							.notEqualCondition();


						})
		.pause(1000)
		.perform(function() {
						//startdate 01/01/2016
						browser.moveToElement('div[view_id^="date_ab-date-validate-start-date"] .webix_inp_static', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="7"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="0"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[aria-label="01 January 2016"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000);


					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test date Case greaterthanCondition 6 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							.dateIncludeTimeCheckBox()
							.validateCondition()
							.morethanCondition();


						})
		.pause(1000)
		.perform(function() {
						//startdate 01/01/2016
						browser.moveToElement('div[view_id^="date_ab-date-validate-start-date"] .webix_inp_static', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="7"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="0"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[aria-label="01 January 2016"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000);


					})
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test date Case lessthanCondition 6 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							.dateIncludeTimeCheckBox()
							.validateCondition()
							.lessthanCondition();


						})
		.pause(1000)
		.perform(function() {
						//startdate 01/01/2016
						browser.moveToElement('div[view_id^="date_ab-date-validate-start-date"] .webix_inp_static', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="7"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="0"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[aria-label="01 January 2016"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000);


					})
		.pause(1000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test date Case morethanequalCondition 6 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							.dateIncludeTimeCheckBox()
							.validateCondition()
							.morethanequalCondition();


						})
		.pause(1000)
		.perform(function() {
						//startdate 01/01/2016
						browser.moveToElement('div[view_id^="date_ab-date-validate-start-date"] .webix_inp_static', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="7"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="0"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[aria-label="01 January 2016"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000);


					})
		.pause(1000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test date Case lessthanequalCondition 6 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
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
			console.log("step 2 dateFieldType");
			coffeeObject
			.selectdateFieldType();
		})
		.perform(function() {
			console.log("step 3 selectFieldType");
			coffeeObject
			.enterDateLabelNameTextBox(labelname)
			.enterdateNameTextBox(Name)
							//.dateShowIconCheckBox()
							//.dateIncludeTimeCheckBox()
							.dateIncludeTimeCheckBox()
							.validateCondition()
							.lessthanequalCondition();


						})
		.pause(1000)
		.perform(function() {
						//startdate 01/01/2016
						browser.moveToElement('div[view_id^="date_ab-date-validate-start-date"] .webix_inp_static', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 0, 0)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('span[class="webix_cal_month_name"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="7"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[data-value="0"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000)
						.moveToElement('div[aria-label="01 January 2016"]', 1, 1)
						.mouseButtonDown(0)
						.mouseButtonUp(0)
						.pause(2000);


					})
		.pause(1000)
		.perform(function() {
			console.log("step 4 addColumn");
			coffeeObject
			.addColumnButton();

		})
		.pause(2000)
		.end(); 
	},
	'test date Case lessthanequalCondition 6 date dateDayFormatPercentl': function (browser) {
		var coffeeObject = browser.page.app_builder.object_list();
		var labelname = shared_func.randomTextInput(2);
		var Name = shared_func.randomTextInput(2);
		browser
		.perform(function() {
			console.log("step 1 selectObjectTest selectAddNewColumnButton selectFieldTypeButton");
			coffeeObject
			.selectObjectTest()
			.selectAddNewColumnButton();
		})
		.elements('css selector', 'div[view_id^="ab_work_object_workspace_datatable_component"] .webix_ss_header', function (elems) {
			console.log("Step 3 Verify");
					//var lastObjItem = elems.value[elems.value.length - 1];
					var lastObjItem = elems.value[0];

					console.log("objectsize:"+ lastObjItem) ;
					coffeeObject.getColumnHeaderValue(0);
					

					//browser.elementIdText(lastObjItem.ELEMENT, function (result) {
						// Assert
					//	console.log("value:"+ result.value) ;
						//browser.verify.equal(result.value, newObjectName);
					//});
				})			
		.elements('css selector', '.webix_ss_center_scroll .webix_column', function (elems) {
			console.log("Step 4 Verify");
					//var lastObjItem = elems.value[elems.value.length - 1];
					var lastObjItem = elems.value[0];
					//console.log("getColumnValuesize:"+ elems.value.length) ;
					coffeeObject.getColumnValue(0);

					//browser.elementIdText(lastObjItem.ELEMENT, function (result) {
						// Assert
					//	console.log("value:"+ result.value) ;
						//browser.verify.equal(result.value, newObjectName);
					//});
				})			
		.pause(2000)
		.end(); 
	},*/

};