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
/* 	
		'test date Case 1 date': function (browser) {
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
				console.log("step 2 dateFieldType");
					coffeeObject
						.selectdateFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterDateLabelNameTextBox(labelname)
						.enterdateNameTextBox(Name)
						.dateShowIconCheckBox()
						.dateIncludeTimeCheckBox()
						.dateIncludeTimeCheckBox();
						//.checkboxshowIconCheckBox()
						//.checkboxDefault();

					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 2 date': function (browser) {
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
						.dateIncludeTimeCheckBox()
						.dateIncludeTimeCheckBox();
						//.checkboxshowIconCheckBox()
						//.checkboxDefault();

					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 3 date': function (browser) {
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
						.dateIncludeTimeCheckBox();
						//.checkboxshowIconCheckBox()
						//.checkboxDefault();

					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 4 date': function (browser) {
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
				console.log("step 2 dateFieldType");
					coffeeObject
						.selectdateFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterDateLabelNameTextBox(labelname)
						.enterdateNameTextBox(Name);
						//.dateShowIconCheckBox()
						//.dateIncludeTimeCheckBox()
						//.dateIncludeTimeCheckBox();
						//.checkboxshowIconCheckBox()
						//.checkboxDefault();

					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 5 date': function (browser) {
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
				console.log("step 2 dateFieldType");
					coffeeObject
						.selectdateFieldType();
			})
			.perform(function() {
				console.log("step 3 selectFieldType");
					coffeeObject
						.enterDateLabelNameTextBox(labelname)
						.enterdateNameTextBox(Name)
						.dateShowIconCheckBox()
						.dateIncludeTimeCheckBox();
						//.dateIncludeTimeCheckBox();
						//.checkboxshowIconCheckBox()
						//.checkboxDefault();

					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
*/
// ---> end case normal */

//---->Case Day 
/*
		'test date Case 6 date dateDayFormatPercentJ': function (browser) {
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
						.dateDayFormatPercentJ();

					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 7 date dateDayFormatPercentd': function (browser) {
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
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 8 date dateDayFormatPercentD': function (browser) {
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
						.dateDayFormatPercentD();

					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 9 date dateDayFormatPercentl': function (browser) {
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
						.dateDayFormatPercentl();

					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		*/
		/*'test date Case 9 date dateDayFormatPercentl': function (browser) {
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
						.dateDayItem();

					
			})
			.perform(function() {
					browser.moveToElement('div[view_id^="date_ab-date-day-order"] .webix_inp_static', 5, 5)
							.mouseButtonDown(0)
							.mouseButtonUp(0);
			})
			.perform(function() {
					coffeeObject
						.dateDayPlaces1();	
			})
			.perform(function() {
				console.log("step 4 addColumn");

					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 10 date dateDayFormatPercentl': function (browser) {
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
			.pause(1000)
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 11 date dateDayFormatPercentl': function (browser) {
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
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},*/
		/*'test date Case 12 date dateDayFormatPercentl': function (browser) {
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
						.dateDayFormatCommaRadio();
					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 13 date dateDayFormatPercentl': function (browser) {
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
						.dateDayFormatSlashdio();
					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 14 date dateDayFormatPercentl': function (browser) {
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
						.dateDayFormatSpaceRadio();
					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 15 date dateDayFormatPercentl': function (browser) {
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
						.dateDayFormatDashRadio();
					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case 16 date dateDayFormatPercentl': function (browser) {
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
						.dateDayFormatColonRadio();
					
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},*/
//-----> end case Day 

//----->  case Month
	/*'test date Case Month 1 date dateDayFormatPercentl': function (browser) {
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
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
	'test date Case Month 2 date dateDayFormatPercentl': function (browser) {
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
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Month 3 date dateDayFormatPercentl': function (browser) {
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
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Month 4 date dateDayFormatPercentl': function (browser) {
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
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},*/
		/*'test date Case Month 5 date dateDayFormatPercentl': function (browser) {
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
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Month 6 date dateDayFormatPercentl': function (browser) {
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
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Month 7 date dateDayFormatPercentl': function (browser) {
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
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Month 8 date dateDayFormatPercentl': function (browser) {
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
						.dateMonthItem();
						//.dateMonthFormat()
						//.dateMonthFormatPercentn();

					
			})
			.pause(1000)
			.perform(function() {
					coffeeObject
						.dateDayFormatCommaRadio();
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Month 9 date dateDayFormatPercentl': function (browser) {
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
						.dateMonthItem();
						//.dateMonthFormat()
						//.dateMonthFormatPercentn();

					
			})
			.pause(1000)
			.perform(function() {
					coffeeObject
						.dateDayFormatSlashdio();
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Month 10 date dateDayFormatPercentl': function (browser) {
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
						.dateMonthItem();
						//.dateMonthFormat()
						//.dateMonthFormatPercentn();

					
			})
			.pause(1000)
			.perform(function() {
					coffeeObject
						.dateDayFormatSpaceRadio();
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Month 11 date dateDayFormatPercentl': function (browser) {
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
						.dateMonthItem();
						//.dateMonthFormat()
						//.dateMonthFormatPercentn();

					
			})
			.pause(1000)
			.perform(function() {
					coffeeObject
						.dateDayFormatDashRadio();
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Month 12 date dateDayFormatPercentl': function (browser) {
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
						.dateMonthItem();
						//.dateMonthFormat()
						//.dateMonthFormatPercentn();

					
			})
			.pause(1000)
			.perform(function() {
					coffeeObject
						.dateDayFormatColonRadio();
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},*/
//---> end case month*/

//---> case year
		/*'test date Case Year 1 date dateDayFormatPercentl': function (browser) {
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
					browser.moveToElement('div[view_id^="date_ab-date-year-format"] .webix_inp_static', 5, 5)
							.mouseButtonDown(0)
							.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
					coffeeObject
						.dateYearFormatPercenty();
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Year 2 date dateDayFormatPercentl': function (browser) {
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
					browser.moveToElement('div[view_id^="date_ab-date-year-format"] .webix_inp_static', 5, 5)
							.mouseButtonDown(0)
							.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
					coffeeObject
						.dateYearFormatPercentY();
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Year 3 date dateDayFormatPercentl': function (browser) {
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
					browser.moveToElement('div[view_id^="date_ab-date-year-format"] .webix_inp_static', 5, 5)
							.mouseButtonDown(0)
							.mouseButtonUp(0);
			})
			.pause(1000)
			.perform(function() {
					coffeeObject
						.dateYearFormatPercentY();
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},*/
		/*'test date Case Year 4 date dateDayFormatPercentl': function (browser) {
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
						.dateYearPlaces1();
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Year 5 date dateDayFormatPercentl': function (browser) {
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
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},
		'test date Case Year 6 date dateDayFormatPercentl': function (browser) {
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
						.dateYearPlaces3();
			})
			.perform(function() {
				console.log("step 4 addColumn");
					coffeeObject
						.addColumnButton();

			})
			.pause(2000)
			.end(); 
		},*/

//---> end case year
		/*'test date Case dateRangeCondition 6 date dateDayFormatPercentl': function (browser) {
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
		},*/
		/*'test date Case betweenCondition  date dateDayFormatPercentl': function (browser) {
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
		},*/
		/*'test date Case equalCondition 6 date dateDayFormatPercentl': function (browser) {
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
		},*/
		/*'test date Case notEqualCondition 6 date dateDayFormatPercentl': function (browser) {
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
		},*/
		'test date Case lessthanequalCondition 6 date dateDayFormatPercentl': function (browser) {
			var coffeeObject = browser.page.app_builder.object_list();
			var labelname = shared_func.randomTextInput(20);
			var Name = shared_func.randomTextInput(20);
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
		},

};