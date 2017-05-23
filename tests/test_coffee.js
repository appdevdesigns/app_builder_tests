var async = require('async');
var shared_func = require('../shared_libs/shared_function.js');

module.exports = {
	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
			menuSection = browser.page.opsportal.menu();

		browser
			.url(browser.launchUrl)
			.maximizeWindow()
			.waitForElementVisible('body', 1000);

		loginPage.passLogin();

		menuSection.selectCoffeeShop();
	},	
//////////////////////////
//TEST CASE ADD USER//
//////////////////////////
/*	'test add male user data': function (browser) {
		var coffeePage = browser.page.app.coffee_list();
		var email = shared_func.randomEmailInput();
		var firstName = shared_func.randomTextInput(6);
		var lastName = shared_func.randomTextInput(10);
		var userAddress = shared_func.randomTextInput(50);
		var isMale = true;

		browser
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickAddUserButton();
			})
			.pause(1000)
			.perform(function() {
				console.log("step 2");
				coffeePage
					.setUserEmail(email)
					.setUserFirstName(firstName)
					.setUserLastname(lastName)
					.setUserAddress(userAddress)
					.setUserMale()
					.setUserDateofBirth()
					.clickSaveAddUserButton()
					.clickUserListButton();
			})
			.pause(3000)
			.elements('css selector', coffeePage.elements.userEmailList.selector, function (elems) {
				var emailObject = elems.value[elems.value.length - 1];
				browser.elementIdText(emailObject.ELEMENT, function (result) {
					console.log(":" + result.value + ":" + email);
					browser.assert.equal(result.value, email);
				});
				
			})
			.elements('css selector', coffeePage.elements.userFirstNameList.selector, function (elems) {
				var userFirstNameObject = elems.value[elems.value.length - 1];

				browser.elementIdText(userFirstNameObject.ELEMENT, function (result) {
					console.log(":" + result.value + ":" + firstName);
					browser.assert.equal(result.value, firstName);
				});
				
			})
			.elements('css selector', coffeePage.elements.userLastNameList.selector, function (elems) {
				var userLastNameObject = elems.value[elems.value.length - 1];
				browser.elementIdText(userLastNameObject.ELEMENT, function (result) {
					console.log(":" + result.value + ":" + lastName);
					browser.assert.equal(result.value, lastName);
				});
				
			})
			.elements('css selector', coffeePage.elements.userAddressList.selector, function (elems) {
				var userAddressObject = elems.value[elems.value.length - 1];
				browser.elementIdText(userAddressObject.ELEMENT, function (result) {
					console.log(":" + result.value + ":" + userAddress);
					browser.assert.equal(result.value, userAddress);
				});
				
			})
			.elements('css selector', coffeePage.elements.userMaleList.selector, function (elems) {
				browser.assert.cssClassPresent('div[column="7"] .webix_cell:nth-of-type(' + elems.value.length + ') .ab-boolean-display .webix_icon', 'fa-check-square-o');	
			})
			.elements('css selector', coffeePage.elements.userFemaleList.selector, function (elems) {
				browser.assert.cssClassNotPresent('div[column="8"] .webix_cell:nth-of-type(' + elems.value.length + ') .ab-boolean-display .webix_icon', 'fa-check-square-o');	
			})
			.pause(3000)
			.end(); 
		
	},*/

//////////////////////////
//END TEST CASE ADD USER//
//////////////////////////
	'test update user data' : function (browser){
			var coffeePage = browser.page.app.coffee_list();
			var email = shared_func.randomEmailInput();
			var firstName = shared_func.randomTextInput(6);

			browser
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton();

			})
			/*.pause(1000)
			.perform(function() {
				console.log("step 2");
				coffeePage
					.selectRowUserList()
					.selectUpdateRecord();
			})
			.pause(1000)
			.perform(function(){
				console.log("step 3 Update UserEmail");
				coffeePage
				.setUpdateUserEmail(email)
				.clickUpdateButton();
			})
			.pause(1000)
			.elements('css selector', coffeePage.elements.userEmailList.selector, function (elems) {
				var userEmailListObject = elems.value[elems.value.length - 1];
				browser.elementIdText(userEmailListObject.ELEMENT, function (result) {
					console.log(":" + result.value + ":" + email);
					browser.assert.equal(result.value, email);
					console.log("End Update UserEmail");
				});
			})*/
			.pause(1000)
			.perform(function() {
				console.log("step 2");
				coffeePage
					.selectRowUserList()
					.selectUpdateRecord();
			})
			.pause(1000)
			.perform(function(){
				console.log("step 3 Update User FirstName");
				coffeePage
				.setUpdateUserFirstName();
				
			});
	}

/////////////////////////////
//END TEST CASE UPDATE USER//
/////////////////////////////


	
/////////////////////////////
//END TEST CASE UPDATE USER//
/////////////////////////////

	
/////////////////////////////
//END TEST CASE DELETE USER//
/////////////////////////////
/*	'test delete user data': function (browser) {
		var coffeePage = browser.page.app.coffee_list();

		browser
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton();
			})
			.pause(3000)
			.end();
	}*/
	
/////////////////////////////
//END TEST CASE DELETE USER//
/////////////////////////////

};