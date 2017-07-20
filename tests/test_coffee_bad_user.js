var async = require('async');
var shared_func = require('../shared_libs/shared_function.js');

module.exports = {
	'@tags': ['CRUD', 'WORST'],
	beforeEach: function (browser) {
		var loginPage = browser.page.opsportal.login(),
			menuSection = browser.page.opsportal.menu();

		browser
			.url(browser.launchUrl)
			.maximizeWindow()
			.waitForElementVisible('body', 1000)
			.perform(function() {
				loginPage.passLogin();
			})
			.perform(function() {
				menuSection.selectCoffeeShop();
			});


	},

///////////////////////////
////ADD WORST CASE USER////
///////////////////////////

	'Test add exceed character user' : function (browser) {

		var coffeePage = browser.page.app.coffee_list();
		var email = shared_func.randomEmailInput(2000);
		var firstName = shared_func.randomTextInput(2000);
		var lastName = shared_func.randomTextInput(2000);
		var userAddress = shared_func.randomTextInput(2000);
		var isMale = true;

		browser
			.pause(2000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickAddUserButton();
			})
			.perform(function() {
				console.log("step 2");
				coffeePage
					.setUserEmail(email)
					.setUserFirstName(firstName)
					.setUserLastname(lastName)
					.setUserAddress(userAddress)
					.setUserMale()
					.setUserDateofBirth()
					.clickCoffeeShopAUButton();
					// .clickSaveAddUserButton();
			})
			.pause(2000)
			.perform(function() {
				console.log("step 3");
				coffeePage
					.clickUserListButton();
			})
			.pause(2000)
			// .elements('css selector', coffeePage.elements.userEmailList.selector, function (elems) {
			// 	var emailObject = elems.value[elems.value.length - 1];
			// 	browser.elementIdText(emailObject.ELEMENT, function (result) {
			// 		console.log(":" + result.value + ":" + email);
			// 		browser.verify.equal(result.value, email);
			// 	});
				
			// })
			// .pause(3000)
			.end(); 
	},


	'Test add number character in first + lastname' : function (browser) {

		var coffeePage = browser.page.app.coffee_list();
		var email = shared_func.randomEmailInput(50);
		var firstName = shared_func.randomTextWithNumberInput(20);
		var lastName = shared_func.randomTextWithNumberInput(20);
		var userAddress = shared_func.randomTextInput(50);
		var isFemale = true;

		browser
			.pause(2000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickAddUserButton();
			})
			.perform(function() {
				console.log("step 2");
				coffeePage
					.setUserEmail(email)
					.setUserFirstName(firstName)
					.setUserLastname(lastName)
					.setUserAddress(userAddress)
					.setUserFemale()
					.setUserDateofBirth()
					.clickCoffeeShopAUButton();
					// .clickSaveAddUserButton();
			})
			.pause(2000)
			.perform(function() {
				console.log("step 3");
				coffeePage
					.clickUserListButton();
			})
			.pause(2000)
			// .elements('css selector', coffeePage.elements.userEmailList.selector, function (elems) {
			// 	var emailObject = elems.value[elems.value.length - 1];
			// 	browser.elementIdText(emailObject.ELEMENT, function (result) {
			// 		console.log(":" + result.value + ":" + email);
			// 		browser.verify.equal(result.value, email);
			// 	});
				
			// })
			// .pause(3000)
			.end(); 
	},

	'Test add male + female user' : function (browser) {

		var coffeePage = browser.page.app.coffee_list();
		var email = shared_func.randomEmailInput(2000);
		var firstName = shared_func.randomTextInput(2000);
		var lastName = shared_func.randomTextInput(2000);
		var userAddress = shared_func.randomTextInput(2000);
		var isMale = true;
		var isFemale = true;

		browser
			.pause(2000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickAddUserButton();
			})
			.perform(function() {
				console.log("step 2");
				coffeePage
					.setUserEmail(email)
					.setUserFirstName(firstName)
					.setUserLastname(lastName)
					.setUserAddress(userAddress)
					.setUserMale()
					.setUserFemale()
					.setUserDateofBirth()
					.clickCoffeeShopAUButton();
					// .clickSaveAddUserButton();
			})
			.pause(2000)
			.perform(function() {
				console.log("step 3");
				coffeePage
					.clickUserListButton();
			})
			.pause(2000)
			// .elements('css selector', coffeePage.elements.userEmailList.selector, function (elems) {
			// 	var emailObject = elems.value[elems.value.length - 1];
			// 	browser.elementIdText(emailObject.ELEMENT, function (result) {
			// 		console.log(":" + result.value + ":" + email);
			// 		browser.verify.equal(result.value, email);
			// 	});
				
			// })
			// .pause(3000)
			.end(); 
	},

	'Test add special character user' : function (browser) {

		var coffeePage = browser.page.app.coffee_list();
		var email = shared_func.randomEmailInput(20);
		var firstName = shared_func.randomTextInput(20) + shared_func.randomSpecialCharacterInput(10);
		var lastName = shared_func.randomTextInput(20) + shared_func.randomSpecialCharacterInput(10);
		var userAddress = shared_func.randomTextInput(50);
		var isMale = true;

		browser
			.pause(2000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickAddUserButton();
			})
			.perform(function() {
				console.log("step 2");
				coffeePage
					.setUserEmail(email)
					.setUserFirstName(firstName)
					.setUserLastname(lastName)
					.setUserAddress(userAddress)
					.setUserMale()
					.setUserDateofBirth()
					.clickCoffeeShopAUButton();
					// .clickSaveAddUserButton();
			})
			.pause(2000)
			.perform(function() {
				console.log("step 3");
				coffeePage
					.clickUserListButton();
			})
			.pause(2000)
			// .elements('css selector', coffeePage.elements.userEmailList.selector, function (elems) {
			// 	var emailObject = elems.value[elems.value.length - 1];
			// 	browser.elementIdText(emailObject.ELEMENT, function (result) {
			// 		console.log(":" + result.value + ":" + email);
			// 		browser.verify.equal(result.value, email);
			// 	});
				
			// })
			// .pause(3000)
			.end(); 
	},

	'Test add wrong email format user' : function (browser) {

		var coffeePage = browser.page.app.coffee_list();
		var email = shared_func.randomTextInput(20) + shared_func.randomSpecialCharacterInput(10) ;
		var firstName = shared_func.randomTextInput(20);
		var lastName = shared_func.randomTextInput(20);
		var userAddress = shared_func.randomTextInput(50);
		var isMale = true;

		browser
			.pause(2000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickAddUserButton();
			})
			.perform(function() {
				console.log("step 2");
				coffeePage
					.setUserEmail(email)
					.setUserFirstName(firstName)
					.setUserLastname(lastName)
					.setUserAddress(userAddress)
					.setUserMale()
					.setUserDateofBirth()
					.clickCoffeeShopAUButton();
					// .clickSaveAddUserButton();
			})
			.pause(2000)
			.perform(function() {
				console.log("step 3");
				coffeePage
					.clickUserListButton();
			})
			.pause(2000)
			// .elements('css selector', coffeePage.elements.userEmailList.selector, function (elems) {
			// 	var emailObject = elems.value[elems.value.length - 1];
			// 	browser.elementIdText(emailObject.ELEMENT, function (result) {
			// 		console.log(":" + result.value + ":" + email);
			// 		browser.verify.equal(result.value, email);
			// 	});
				
			// })
			// .pause(3000)
			.end(); 
	},

///////////////////////////////
////END ADD WORST CASE USER////
///////////////////////////////
	

/////////////////////////
//TEST CASE DELETE USER//
/////////////////////////

	/*'test delete user data': function (browser) {
		var coffeePage = browser.page.app.coffee_list();

		var userEmail = "";

		browser
			.pause(2000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickUserListButton();
			})
			.pause(2000)
			.perform(function() {
				console.log("step 2");
				coffeePage
					.selectDeleteUserRecord();
			})
			.pause(2000)
			.elements('css selector', coffeePage.elements.userEmailList.selector, function (elems) {
				var emailObject = elems.value[elems.value.length - 1];
				browser.elementIdText(emailObject.ELEMENT, function (result) {
					userEmail = result.value;
				});
				
			})
			.pause(2000)			
			.perform(function(){
				console.log("step 3 Delete User Record");
				coffeePage
					.clickDeleteUserRecordButton();
			})
			.pause(2000)
			.elements('css selector', coffeePage.elements.userEmailList.selector, function (elems) {
				var userEmailListObject = elems.value[elems.value.length - 1];
				if (userEmailListObject != null) {
					browser.elementIdText(userEmailListObject.ELEMENT, function (result) {
						console.log(":" + result.value + ":" + userEmail);
						browser.verify.equal(result.value, "");
						console.log("End Delete userEmailListObject");
					});
				};

			})
			.end();
	}*/
	
}