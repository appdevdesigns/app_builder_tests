var shared_func = require('../shared_libs/shared_function.js');
require('../shared_libs/global_config.js');

module.exports = {
  	// '@disabled': true,
	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
			menuSection = browser.page.opsportal.menu(),
			appListPage = browser.page.app_builder.app_list();

		browser
			.url(browser.launchUrl) // Go to http://localhost:1337/page/opsportal
			.waitForElementVisible('body', 1000); // Wait for the login page

		loginPage.passLogin(); // login

		menuSection.selectAppBuilder(); // Select app builder menu item

		appListPage.selectApp();
	},

	'test create and search with string + Number': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextWithNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		var objectListSize = 0;

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.clearSortSeachValue();
			})
			.perform(function() {
				console.log("Step 1 Add new Object");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(newObjectName)
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 2 Input Search Value");
				objectListElement
					.searchObject(newObjectName);	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
				console.log("Step 3 Verify");
				var lastObjItem = elems.value[elems.value.length - 1];
				objectListSize = elems.value.length;
				browser.elementIdText(lastObjItem.ELEMENT, function (result) {
					// Assert
					browser.verify.equal(result.value, newObjectName);
				});
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},
	'test create and sort ascending with string + Number': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextWithNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		var objectListSize = 0;
		global.objectNameArray = [];
		global.objectNameArray2 = [];

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.clearSortSeachValue();
			})
			.perform(function() {
				console.log("Step 1 Add new Object");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(newObjectName)
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 2 Get Data from view");
				browser.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
					if (elems.value.length > 0) {	
						objectListSize = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							objectListElement.getObjectNameToArray(j);
						}	
					};
				});
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 3 Sort Value");
				objectListElement
					.sortObjectAscending();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 4 Get Data from view After Sort");
				browser.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
					if (elems.value.length > 0) {	
						objectListSize = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							objectListElement.getObjectNameToArray2(j);
						}	
					};
				});
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 5 verify Sort Data");
				var sortObjectAsc = global.objectNameArray.sort(function (a, b) {
				    return a.localeCompare(b);
				});
				for (var i = 0; i < objectListSize; i++) {
					browser.verify.equal(sortObjectAsc[i], objectNameArray2[i]);
				};
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},	
	'test create and sort descending with string + Number': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextWithNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		var objectListSize = 0;
		global.objectNameArray = [];
		global.objectNameArray2 = [];

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.clearSortSeachValue();
			})
			.perform(function() {
				console.log("Step 1 Add new Object");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(newObjectName)
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 2 Get Data from view");
				browser.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
					if (elems.value.length > 0) {	
						objectListSize = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							objectListElement.getObjectNameToArray(j);
						}	
					};
				});
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 3 Sort Value");
				objectListElement
					.sortObjectDescending();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 4 Get Data from view After Sort");
				browser.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
					if (elems.value.length > 0) {	
						objectListSize = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							objectListElement.getObjectNameToArray2(j);
						}	
					};
				});
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 5 verify Sort Data");
				var sortObjectAsc = global.objectNameArray.sort(function (a, b) {
				    return a.localeCompare(b);
				}).reverse();
				for (var i = 0; i < objectListSize; i++) {
					browser.verify.equal(sortObjectAsc[i], objectNameArray2[i]);
				};
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},
	'test create and Group Ascending with string': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextWithNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		var objectListSize = 0;
		var groupSize = 0;
		global.objectNameArray = [];
		global.objectNameArray2 = [];
		var headerGroupArray = [];

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.clearSortSeachValue()
					.sortObjectAscending();
			})
			.perform(function() {
				console.log("Step 1 Add new Object");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(newObjectName)
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 2 Get Data from view");
				browser.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
					if (elems.value.length > 0) {	
						objectListSize = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							objectListElement.getObjectNameToArray(j);
						}	
					};
				});
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 3 Grouping");
				objectListElement
					.groupObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 4 Get Data After group");
				browser.elements('css selector', "div[view_id^='ab_work_object_list_editlist'] .webix_unit_header span", function (elems) {
					if (elems.value.length > 0) {	
						groupSize = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {	
							browser.elementIdText(elems.value[j-1].ELEMENT, function (result) {
								headerGroupArray.push(result.value);
							});	
						}	
					};
				});
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 5 Verify");
				var currentGroup = "";
				var currentGroupIndex = 0;
				for (var j = 0; j < objectNameArray.length; j++) {
					currentGroup = objectNameArray[j].substring(0, 1).toUpperCase();
					if (currentGroup != headerGroupArray[currentGroupIndex]) {
						if (currentGroupIndex < groupSize) {
							currentGroupIndex++;		
						}
						else {
							browser.verify.equal(true, false, "Header Out Of Bounds Index");
						};
					};
					browser.verify.equal(currentGroup, headerGroupArray[currentGroupIndex]);
				};
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 6 unGrouping");
				objectListElement
					.unGroupObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},

	'test create and Group Descending with string': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextWithNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		var objectListSize = 0;
		var groupSize = 0;
		global.objectNameArray = [];
		global.objectNameArray2 = [];
		var headerGroupArray = [];

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.clearSortSeachValue()
					.sortObjectDescending();
			})
			.perform(function() {
				console.log("Step 1 Add new Object");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(newObjectName)
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 2 Get Data from view");
				browser.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
					if (elems.value.length > 0) {	
						objectListSize = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							objectListElement.getObjectNameToArray(j);
						}	
					};
				});
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 3 Grouping");
				objectListElement
					.groupObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 4 Get Data After group");
				browser.elements('css selector', "div[view_id^='ab_work_object_list_editlist'] .webix_unit_header span", function (elems) {
					if (elems.value.length > 0) {	
						groupSize = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {	
							browser.elementIdText(elems.value[j-1].ELEMENT, function (result) {
								headerGroupArray.push(result.value);
							});	
						}	
					};
				});
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 5 Verify");
				var currentGroup = "";
				var currentGroupIndex = 0;
				for (var j = 0; j < objectNameArray.length; j++) {
					currentGroup = objectNameArray[j].substring(0, 1).toUpperCase();
					if (currentGroup != headerGroupArray[currentGroupIndex]) {
						if (currentGroupIndex < groupSize) {
							currentGroupIndex++;		
						}
						else {
							browser.verify.equal(true, false, "Header Out Of Bounds Index");
						};
					};
					browser.verify.equal(currentGroup, headerGroupArray[currentGroupIndex]);
				};
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 6 unGrouping");
				objectListElement
					.unGroupObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},
	'test Delete Test Object': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();

		browser
			.perform(function() {
				console.log("Delete#1");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						var lastAppItem = elems.value[elems.value.length - 1];
						if (elems.value.length > 0) {
							browser
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(500)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 90)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.perform(function(){
									objectListElement
										.alertOk();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Delete#2");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						var lastAppItem = elems.value[elems.value.length - 1];
						if (elems.value.length > 0) {
							browser
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(500)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 90)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.perform(function(){
									objectListElement
										.alertOk();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Delete#3");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						var lastAppItem = elems.value[elems.value.length - 1];
						if (elems.value.length > 0) {
							browser
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(500)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 90)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.perform(function(){
									objectListElement
										.alertOk();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Delete#4");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						var lastAppItem = elems.value[elems.value.length - 1];
						if (elems.value.length > 0) {
							browser
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(500)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 90)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.perform(function(){
									objectListElement
										.alertOk();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Delete#5");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						var lastAppItem = elems.value[elems.value.length - 1];
						if (elems.value.length > 0) {
							browser
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(500)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 90)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(500)
								.perform(function(){
									objectListElement
										.alertOk();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},
};