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
					.objectSettingsClick()
					.clearSortSeachValue();
			})
			.pause(global.defaultwaittime * global.delaytime)
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
					.objectSettingsClick()
					.clearSortSeachValue();
			})
			.pause(global.defaultwaittime * global.delaytime)
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
				for (var i = 0; i < objectListSize; i++) {
					browser.verify.equal(global.objectNameArray[i], global.objectNameArray2[i]);
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
					.objectSettingsClick()
					.clearSortSeachValue();
			})
			.pause(global.defaultwaittime * global.delaytime)
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
		var resultNameArray = [];

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.objectSettingsClick()
					.clearSortSeachValue()
					.sortObjectAscending();
			})
			.pause(global.defaultwaittime * global.delaytime)
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
			.perform(function(){
				console.log("step 2.5 fix ObjectName Start WithNumber");
				var tempNumberArray = [];
				var tempCharArray = [];
				for (var i = 0; i < global.objectNameArray.length; i++) {
					if (global.objectNameArray[i].substring(0, 1) >= 0 
						&& global.objectNameArray[i].substring(0, 1) <= 9) {
						console.log("Push Number:" + global.objectNameArray[i]);
						tempNumberArray.push(global.objectNameArray[i]);
					}
					else {	
						console.log("Push Char:" + global.objectNameArray[i]);
						tempCharArray.push(global.objectNameArray[i]);
					};
				}

				//Number Array always 0 -> 9
				//Char Array depend on user sort
				var sortNumber  = tempNumberArray.sort(function (a, b) {
				    return a.localeCompare(b);
				});

				resultNameArray = sortNumber.concat(tempCharArray);
				console.log("Result: \n" + resultNameArray);
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
				for (var j = 0; j < resultNameArray.length; j++) {
					currentGroup = resultNameArray[j].substring(0, 1).toUpperCase();
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
		var resultNameArray = [];

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.objectSettingsClick()
					.clearSortSeachValue()
					.sortObjectDescending();
			})
			.pause(global.defaultwaittime * global.delaytime)
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
			.perform(function(){
				console.log("step 2.5 fix ObjectName Start WithNumber");
				var tempNumberArray = [];
				var tempCharArray = [];
				for (var i = 0; i < global.objectNameArray.length; i++) {
					if (global.objectNameArray[i].substring(0, 1) >= 0 
						&& global.objectNameArray[i].substring(0, 1) <= 9) {
						console.log("Push Number:" + global.objectNameArray[i]);
						tempNumberArray.push(global.objectNameArray[i]);
					}
					else {	
						console.log("Push Char:" + global.objectNameArray[i]);
						tempCharArray.push(global.objectNameArray[i]);
					};
				}

				//Number Array always 0 -> 9
				//Char Array depend on user sort
				var sortNumber  = tempNumberArray.sort(function (a, b) {
				    return a.localeCompare(b);
				});
				var sortCharArray = tempCharArray.sort(function (a,b) {
					return a.localeCompare(b);
				}).reverse();
				resultNameArray = sortNumber.concat(sortCharArray);
				console.log("Result: \n" + resultNameArray);
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
				for (var j = 0; j < resultNameArray.length; j++) {
					currentGroup = resultNameArray[j].substring(0, 1).toUpperCase();
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
	'test Delete And search Object': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var deletedObjectName = "";
		browser
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.objectSettingsClick()
					.clearSortSeachValue();
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1 Add new Object before delete");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(shared_func.randomTextWithNumberInput())
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 2 Delete Last Object");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						if (elems.value.length > 0) {

							var lastAppItem = elems.value[elems.value.length - 1];
							browser
								.elementIdText(lastAppItem.ELEMENT, function (result) {
									deletedObjectName = result.value;
								})
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 90)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.perform(function(){
									objectListElement
										.alertYes();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 3 Input Search Value");
				objectListElement
					.searchObject(deletedObjectName);	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
				console.log("Step 4 Verify");
				if (elems.value.length == 0 ) {
					browser.verify.equal(0, 0, "No Object Found!");
				} else {
					objectListSize = elems.value.length;
					for (var i = 0; i < elems.value.length; i++) {
						var objectItem = elems.value[i];
						browser.elementIdText(objectItem.ELEMENT, function (result) {
							// Assert
							browser.verify.not.equal(result.value, deletedObjectName);
						});
					};
				}
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},
	'test Delete And Sort Object Ascending': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var deletedObjectName = "";
		global.objectNameArray = [];
		global.objectNameArray2 = [];

		browser
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.objectSettingsClick()
					.clearSortSeachValue();
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1 Add new Object before delete");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(shared_func.randomTextWithNumberInput())
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 2 Delete Last Object");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						if (elems.value.length > 0) {

							var lastAppItem = elems.value[elems.value.length - 1];
							browser
								.elementIdText(lastAppItem.ELEMENT, function (result) {
									deletedObjectName = result.value;
								})
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 90)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.perform(function(){
									objectListElement
										.alertYes();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 3 Get Data from view");
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
				console.log("Step 4 Sort Value");
				objectListElement
					.sortObjectAscending();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 5 Get Data from view After Sort");
				browser.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
					if (elems.value.length > 0) {	
						objectListSize = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							objectListElement.getObjectNameToArray2(j);
						}	
					}
					else {
						browser.verify.equal(true, false, "No Object to sort");
					};
				});
			})	
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 6 verify Sort Data");
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
	'test Delete And Sort Object Descending': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var deletedObjectName = "";
		global.objectNameArray = [];
		global.objectNameArray2 = [];

		browser
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.objectSettingsClick()
					.clearSortSeachValue();
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1 Add new Object before delete");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(shared_func.randomTextWithNumberInput())
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 2 Delete Last Object");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						if (elems.value.length > 0) {

							var lastAppItem = elems.value[elems.value.length - 1];
							browser
								.elementIdText(lastAppItem.ELEMENT, function (result) {
									deletedObjectName = result.value;
								})
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 90)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.perform(function(){
									objectListElement
										.alertYes();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 3 Get Data from view");
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
				console.log("Step 4 Sort Value");
				objectListElement
					.sortObjectDescending();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 5 Get Data from view After Sort");
				browser.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
					if (elems.value.length > 0) {	
						objectListSize = elems.value.length;
						for (var j = 1; j <= elems.value.length; j++) {
							objectListElement.getObjectNameToArray2(j);
						}	
					}
					else {
						browser.verify.equal(true, false, "No Object to sort");
					};
				});
			})	
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 6 verify Sort Data");
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

	'test Delete and Group Ascending with string': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextWithNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		var objectListSize = 0;
		var groupSize = 0;
		global.objectNameArray = [];
		global.objectNameArray2 = [];
		var headerGroupArray = [];
		var resultNameArray = [];

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.objectSettingsClick()
					.clearSortSeachValue()
					.sortObjectAscending();
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1 Add new Object before delete");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(shared_func.randomTextWithNumberInput())
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 2 Delete Last Object");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						if (elems.value.length > 0) {

							var lastAppItem = elems.value[elems.value.length - 1];
							browser
								.elementIdText(lastAppItem.ELEMENT, function (result) {
									deletedObjectName = result.value;
								})
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 90)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.perform(function(){
									objectListElement
										.alertYes();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 3 Get Data from view");
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
			.perform(function(){
				console.log("step 3.5 fix ObjectName Start WithNumber");
				var tempNumberArray = [];
				var tempCharArray = [];
				for (var i = 0; i < global.objectNameArray.length; i++) {
					if (global.objectNameArray[i].substring(0, 1) >= 0 
						&& global.objectNameArray[i].substring(0, 1) <= 9) {
						console.log("Push Number:" + global.objectNameArray[i]);
						tempNumberArray.push(global.objectNameArray[i]);
					}
					else {	
						console.log("Push Char:" + global.objectNameArray[i]);
						tempCharArray.push(global.objectNameArray[i]);
					};
				}

				//Number Array always 0 -> 9
				//Char Array depend on user sort
				var sortNumber  = tempNumberArray.sort(function (a, b) {
				    return a.localeCompare(b);
				});

				resultNameArray = sortNumber.concat(tempCharArray);
				console.log("Result: \n" + resultNameArray);
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 4 Grouping");
				objectListElement
					.groupObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 5 Get Data After group");
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
				console.log("step 6 Verify");
				var currentGroup = "";
				var currentGroupIndex = 0;
				for (var j = 0; j < resultNameArray.length; j++) {
					currentGroup = resultNameArray[j].substring(0, 1).toUpperCase();
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
				console.log("Step 7 unGrouping");
				objectListElement
					.unGroupObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},

	'test Delete and Group Descending with string': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextWithNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		var objectListSize = 0;
		var groupSize = 0;
		global.objectNameArray = [];
		global.objectNameArray2 = [];
		var headerGroupArray = [];
		var resultNameArray = [];

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.objectSettingsClick()
					.clearSortSeachValue()
					.sortObjectDescending();
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1 Add new Object before delete");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(shared_func.randomTextWithNumberInput())
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 2 Delete Last Object");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						if (elems.value.length > 0) {

							var lastAppItem = elems.value[elems.value.length - 1];
							browser
								.elementIdText(lastAppItem.ELEMENT, function (result) {
									deletedObjectName = result.value;
								})
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 90)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.perform(function(){
									objectListElement
										.alertYes();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 3 Get Data from view");
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
			.perform(function(){
				console.log("step 3.5 fix ObjectName Start WithNumber");
				var tempNumberArray = [];
				var tempCharArray = [];
				for (var i = 0; i < global.objectNameArray.length; i++) {
					if (global.objectNameArray[i].substring(0, 1) >= 0 
						&& global.objectNameArray[i].substring(0, 1) <= 9) {
						console.log("Push Number:" + global.objectNameArray[i]);
						tempNumberArray.push(global.objectNameArray[i]);
					}
					else {	
						console.log("Push Char:" + global.objectNameArray[i]);
						tempCharArray.push(global.objectNameArray[i]);
					};
				}

				//Number Array always 0 -> 9
				//Char Array depend on user sort
				var sortNumber  = tempNumberArray.sort(function (a, b) {
				    return a.localeCompare(b);
				});
				var sortCharArray = tempCharArray.sort(function (a,b) {
					return a.localeCompare(b);
				}).reverse();
				resultNameArray = sortNumber.concat(sortCharArray);
				console.log("Result: \n" + resultNameArray);
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 4 Grouping");
				objectListElement
					.groupObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 5 Get Data After group");
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
				console.log("step 6 Verify");
				var currentGroup = "";
				var currentGroupIndex = 0;
				for (var j = 0; j < resultNameArray.length; j++) {
					currentGroup = resultNameArray[j].substring(0, 1).toUpperCase();
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
				console.log("Step 7 unGrouping");
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
										.alertYes();
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
										.alertYes();
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
										.alertYes();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},
	'test Rename and Sort Ascending with string': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextWithNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		var objectListSize = 0;
		var deletedObjectName = "";
		global.objectNameArray = [];
		global.objectNameArray2 = [];

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.objectSettingsClick()
					.clearSortSeachValue()
					.sortObjectAscending();
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1 Add new Object before Rename");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(shared_func.randomTextWithNumberInput())
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1.5 Re-sort");
				objectListElement
					.sortObjectDescending()	
					.sortObjectAscending();	
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
				console.log("Step 3 Rename Last Object");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						if (elems.value.length > 0) {

							var lastAppItem = elems.value[elems.value.length - 1];
							browser
								.elementIdText(lastAppItem.ELEMENT, function (result) {
									deletedObjectName = result.value;
								})
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 40)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.perform(function(){
									objectListElement
										.editRenameInput(newObjectName);
								})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 150)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.perform(function(){
									objectListElement
										.confirmOk();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 5 Re-sort");
				objectListElement
					.sortObjectDescending()	
					.sortObjectAscending();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 6 Get Data after rename");
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
				console.log("step 7 Verify");
				if (objectListSize > 0) {
					var resultNameArray = [];
					for (var i = 0; i < objectListSize; i++) {
						if (global.objectNameArray[i] == deletedObjectName) {
							global.objectNameArray[i] = newObjectName;						};
					};
					var sortObjectAsc = global.objectNameArray.sort(function (a, b) {
					    return a.localeCompare(b);
					});
					for (var j = 0; j < objectListSize; j++) {
						if (global.objectNameArray2[j] != deletedObjectName) {
							if (global.objectNameArray2[j] == newObjectName) {
								browser.verify.equal(true, true, "Object Name has Changed!");
							}
							else {
								browser.verify.equal(sortObjectAsc[j], global.objectNameArray2[j]);
							};
						}
						else {
							browser.verify.equal(true, false, "Error: Object Name not Changed!");
						};
					};		
				};
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},
	'test Rename and Sort Descending with string': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextWithNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		var objectListSize = 0;
		var deletedObjectName = "";
		global.objectNameArray = [];
		global.objectNameArray2 = [];

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.objectSettingsClick()
					.clearSortSeachValue()
					.sortObjectDescending();
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1 Add new Object before Rename");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(shared_func.randomTextWithNumberInput())
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1.5 Re-sort");
				objectListElement	
					.sortObjectAscending()
					.sortObjectDescending();	
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
				console.log("Step 3 Rename Last Object");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						if (elems.value.length > 0) {

							var lastAppItem = elems.value[elems.value.length - 1];
							browser
								.elementIdText(lastAppItem.ELEMENT, function (result) {
									deletedObjectName = result.value;
								})
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 40)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.perform(function(){
									objectListElement
										.editRenameInput(newObjectName);
								})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 150)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.perform(function(){
									objectListElement
										.confirmOk();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 5 Re-sort");
				objectListElement	
					.sortObjectAscending()
					.sortObjectDescending();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 6 Get Data after rename");
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
				console.log("step 7 Verify");
				if (objectListSize > 0) {
					for (var i = 0; i < objectListSize; i++) {
						if (global.objectNameArray[i] == deletedObjectName) {
							global.objectNameArray[i] = newObjectName;
						};
					};
					var sortObjectDsc = global.objectNameArray.sort(function (a, b) {
					    return a.localeCompare(b);
					}).reverse();
					for (var i = 0; i < objectListSize; i++) {
						if (global.objectNameArray2[i] != deletedObjectName) {
							if (global.objectNameArray2[i] == newObjectName) {
								browser.verify.equal(true, true, "Object Name has Changed!");
							}
							else {
								browser.verify.equal(sortObjectDsc[i], global.objectNameArray2[i]);
							};
						}
						else {
							browser.verify.equal(true, false, "Error: Object Name not Changed!");
						};
					};		
				};
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},
	'test Rename and Group Ascending with string': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextWithNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		var objectListSize = 0;
		var groupSize = 0;
		var deletedObjectName = "";
		global.objectNameArray = [];
		global.objectNameArray2 = [];
		var headerGroupArray = [];

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.objectSettingsClick()
					.clearSortSeachValue()
					.sortObjectAscending();
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1 Add new Object before Rename");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(shared_func.randomTextWithNumberInput())
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1.5 Re-sort");
				objectListElement
					.sortObjectDescending()	
					.sortObjectAscending();	
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
				console.log("Step 3 Rename Last Object");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						if (elems.value.length > 0) {

							var lastAppItem = elems.value[elems.value.length - 1];
							browser
								.elementIdText(lastAppItem.ELEMENT, function (result) {
									deletedObjectName = result.value;
								})
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 40)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.perform(function(){
									objectListElement
										.editRenameInput(newObjectName);
								})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 150)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.perform(function(){
									objectListElement
										.confirmOk();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 5 Re-sort");
				objectListElement
					.sortObjectDescending()	
					.sortObjectAscending();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function(){
				console.log("step 6 fix ObjectName Start WithNumber");
				for (var i = 0; i < objectListSize; i++) {
					if (global.objectNameArray[i] == deletedObjectName) {
						global.objectNameArray[i] = newObjectName;
					};
				};
				var sortObjectAsc = global.objectNameArray.sort(function (a, b) {
				    return a.localeCompare(b);
				});

				var tempNumberArray = [];
				var tempCharArray = [];
				for (var j = 0; j < sortObjectAsc.length; j++) {
					if (sortObjectAsc[j].substring(0, 1) >= 0 
						&& sortObjectAsc[j].substring(0, 1) <= 9) {
						console.log("Push Number:" + sortObjectAsc[j]);
						tempNumberArray.push(sortObjectAsc[j]);
					}
					else {	
						console.log("Push Char:" + sortObjectAsc[j]);
						tempCharArray.push(sortObjectAsc[j]);
					};
				}

				//Number Array always 0 -> 9
				//Char Array depend on user sort
				var sortNumber  = tempNumberArray.sort(function (a, b) {
				    return a.localeCompare(b);
				});

				resultNameArray = sortNumber.concat(tempCharArray);
				console.log("Result: \n" + resultNameArray);
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 7 Grouping");
				objectListElement
					.groupObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 8 Get Data after Rename & Group");
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
				console.log("step 9 Verify");
				var currentGroup = "";
				var currentGroupIndex = 0;
				for (var j = 0; j < resultNameArray.length; j++) {
					currentGroup = resultNameArray[j].substring(0, 1).toUpperCase();
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
				console.log("Step 10 unGrouping");
				objectListElement
					.unGroupObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},
	'test Rename and Group Descending with string': function (browser) {
		
		var objectListElement = browser.page.app_builder.object_list();
		var newObjectName = shared_func.randomTextWithNumberInput(); //'TEST ' + Math.random().toString(10).substring(12);
		var objectListSize = 0;
		var groupSize = 0;
		var deletedObjectName = "";
		global.objectNameArray = [];
		global.objectNameArray2 = [];
		var headerGroupArray = [];

		browser
			.perform(function() {
				console.log("Step 0 Clear");
				objectListElement
					.objectSettingsClick()
					.clearSortSeachValue()
					.sortObjectDescending();
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1 Add new Object before Rename");
				objectListElement
					.clickAddNewObject()
					.enterBlankObjectName(shared_func.randomTextWithNumberInput())
					.saveBlankObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 1.5 Re-sort");
				objectListElement
					.sortObjectAscending()
					.sortObjectDescending();
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
				console.log("Step 3 Rename Last Object");
				browser
					.elements('css selector', objectListElement.elements.objectList.selector, function (elems) {
						if (elems.value.length > 0) {

							var lastAppItem = elems.value[elems.value.length - 1];
							browser
								.elementIdText(lastAppItem.ELEMENT, function (result) {
									deletedObjectName = result.value;
								})
								.elementIdClick(lastAppItem.ELEMENT, function () {})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 10, 10)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 40)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.pause(global.defaultwaittime * global.delaytime)
								.perform(function(){
									objectListElement
										.editRenameInput(newObjectName);
								})
								.pause(global.defaultwaittime * global.delaytime)
								.moveToElement(objectListElement.elements.objectListSelectedEdit.selector, 70, 150)
								.mouseButtonDown(0)
								.mouseButtonUp(0)
								.perform(function(){
									objectListElement
										.confirmOk();
								});
							};
						
					})
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 5 Re-sort");
				objectListElement
					.sortObjectAscending()
					.sortObjectDescending();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function(){
				console.log("step 6 fix ObjectName Start WithNumber");
				for (var i = 0; i < objectListSize; i++) {
					if (global.objectNameArray[i] == deletedObjectName) {
						global.objectNameArray[i] = newObjectName;
					};
				};
				var sortObjectAsc = global.objectNameArray.sort(function (a, b) {
				    return a.localeCompare(b);
				}).reverse();

				var tempNumberArray = [];
				var tempCharArray = [];
				for (var j = 0; j < sortObjectAsc.length; j++) {
					if (sortObjectAsc[j].substring(0, 1) >= 0 
						&& sortObjectAsc[j].substring(0, 1) <= 9) {
						console.log("Push Number:" + sortObjectAsc[j]);
						tempNumberArray.push(sortObjectAsc[j]);
					}
					else {	
						console.log("Push Char:" + sortObjectAsc[j]);
						tempCharArray.push(sortObjectAsc[j]);
					};
				}

				//Number Array always 0 -> 9
				//Char Array depend on user sort
				var sortNumber  = tempNumberArray.sort(function (a, b) {
				    return a.localeCompare(b);
				});

				resultNameArray = sortNumber.concat(tempCharArray);
				console.log("Result: \n" + resultNameArray);
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("Step 7 Grouping");
				objectListElement
					.groupObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.perform(function() {
				console.log("step 8 Get Data after Rename & Group");
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
				console.log("step 9 Verify");
				var currentGroup = "";
				var currentGroupIndex = 0;
				for (var j = 0; j < resultNameArray.length; j++) {
					currentGroup = resultNameArray[j].substring(0, 1).toUpperCase();
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
				console.log("Step 10 unGrouping");
				objectListElement
					.unGroupObject();	
			})
			.pause(global.defaultwaittime * global.delaytime)
			.end();
	},
};