var async = require('async');
var shared_func = require('../shared_libs/shared_function.js');

module.exports = {
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

////////////////////////////
//TEST CASE UPDATE PRODUCT//
////////////////////////////
	'test add product data' : function (browser) {
		var coffeePage = browser.page.app.coffee_list();
		var productName = shared_func.randomTextInput(6);
		var productPrice = 50;
		var productStock = 50;
		var productType = 1;
		var productTypeName = "";

		switch (productType) {
			case 1:
				productTypeName = "Small";
				break;
			case 2:
				productTypeName = "Middle";
				break;
			case 3:
				productTypeName = "Large";
				break;
			default:
				break;
		};

		browser
			.pause(2000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickAddProductButton();
			})
			.perform(function() {
				console.log("step 2");
				coffeePage
					.setProductName(productName)
					.setProductPrice(productPrice)
					.setProductStock(productStock)
					.clickProductType()
					.setProductType(productType)
					.clickSaveAddProductButton();
			})
			.pause(2000)
			.perform(function() {
				console.log("step 3");
				coffeePage
					.clickProductListButton();
			})
			.pause(2000)
			.elements('css selector', coffeePage.elements.productNameList.selector, function (elems) {
				var productNameListObject = elems.value[elems.value.length - 1];
				browser.elementIdText(productNameListObject.ELEMENT, function (result) {
					console.log(":" + result.value + ":" + productName);
					browser.assert.equal(result.value, productName);
					console.log("End Add productNameListObject");
				});
			})
			.elements('css selector', coffeePage.elements.productPriceList.selector, function (elems) {
				var productPriceListObject = elems.value[elems.value.length - 1];
				browser.elementIdText(productPriceListObject.ELEMENT, function (result) {
					console.log(":" + result.value + ":" + productPrice);
					browser.assert.equal(result.value, productPrice);
					console.log("End Add productPriceListObject");
				});
			})
			.elements('css selector', coffeePage.elements.productStockList.selector, function (elems) {
				var productStockListObject = elems.value[elems.value.length - 1];
				browser.elementIdText(productStockListObject.ELEMENT, function (result) {
					console.log(":" + result.value + ":" + productStock);
					browser.assert.equal(result.value, productStock);
					console.log("End Add productStockListObject");
				});
			})
			.elements('css selector', coffeePage.elements.productTypeList.selector, function (elems) {
				var productTypeListObject = elems.value[elems.value.length - 1];
				browser.elementIdText(productTypeListObject.ELEMENT, function (result) {
					console.log(":" + result.value + ":" + productTypeName);
					browser.assert.equal(result.value, productTypeName);
					console.log("End Add productStockListObject");
				});
			})
			.pause(2000)
			.end(); 
	},

////////////////////////////////
//END TEST CASE UPDATE PRODUCT//
////////////////////////////////


////////////////////////////
//TEST CASE UPDATE PRODUCT//
////////////////////////////

	/*'test update product data' : function (browser){
			var coffeePage = browser.page.app.coffee_list();
			var productName = shared_func.randomTextInput(6);
			var productPrice = 100;
			var productStock = 100;


			browser
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickProductListButton();

			})
			.pause(1000)
			.perform(function() {
				console.log("step 2");
				coffeePage
					.selectRowProductList()
					.clickUpdateRecordProductListButton();
			})
			.pause(1000)
			.perform(function(){
				console.log("step 3 Update UserEmail");
				coffeePage
					.setUpdateProductName(productName)
					.clickAddMoreFieldButton()
					.setUpdateProductPrice(productPrice)
					.clickAddMoreFieldButton()
					.setUpdateProductStock(productStock)
					//.clickAddMoreFieldButton()
					//.setUpdateproductProductTypeProduct();
					.clickUpdateButton();
			})
			.pause(10000)
			.elements('css selector', coffeePage.elements.productNameList.selector, function (elems) {
				var productNameListObject = elems.value[elems.value.length - 1];
				browser.elementIdText(productNameListObject.ELEMENT, function (result) {
					console.log(":" + result.value + ":" + productName);
					browser.assert.equal(result.value, productName);
					console.log("End Update productNameListObject");
				});
			})
			.elements('css selector', coffeePage.elements.productPriceList.selector, function (elems) {
				var productPriceListObject = elems.value[elems.value.length - 1];
				browser.elementIdText(productPriceListObject.ELEMENT, function (result) {
					console.log(":" + result.value + ":" + productPrice);
					browser.assert.equal(result.value, productPrice);
					console.log("End Update productPriceListObject");
				});
			})
			.elements('css selector', coffeePage.elements.productStockList.selector, function (elems) {
				var productStockListObject = elems.value[elems.value.length - 1];
				browser.elementIdText(productStockListObject.ELEMENT, function (result) {
					console.log(":" + result.value + ":" + productStock);
					browser.assert.equal(result.value, productStock);
					console.log("End Update productStockListObject");
				});
			})
			.end();
			
	},*/

////////////////////////////////
//END TEST CASE UPDATE PRODUCT//
////////////////////////////////


/////////////////////////////
//END TEST CASE DELETE USER//
/////////////////////////////

	'test delete product data': function (browser) {
		var coffeePage = browser.page.app.coffee_list();
		var productSize = 0;
		var productName = "";

		browser
			.pause(2000)
			.perform(function() {
				console.log("step 1");
				coffeePage
					.clickProductListButton();
			})
			.pause(2000)
			.elements('css selector', coffeePage.elements.productNameList.selector, function (elems) {
				if (elems.value.length > 0) {	
					productSize = elems.value.length - 1;
					// console.log(productSize);
					if (parseInt(productSize) > 1) {
						// console.log("productSize > 1");
						var productNameObject = elems.value[elems.value.length - 2];
						browser.elementIdText(productNameObject.ELEMENT, function (result) {
							productName = result.value;
						});
					};
				};
				
			})
			.pause(2000)
			.perform(function() {
				console.log("step 2");
				coffeePage
					.selectDeleteProductRecord(productSize);
			})
			.pause(2000)			
			.perform(function(){
				console.log("step 3 Delete Product Record");
				coffeePage
					.clickDeleteRecordProductListButton();
			})
			.pause(2000)
			.elements('css selector', coffeePage.elements.productNameList.selector, function (elems) {
				var productNameObject = elems.value[elems.value.length - 1];
				if (productNameObject != null) {
					browser.elementIdText(productNameObject.ELEMENT, function (result) {
						console.log(":" + result.value + ":" + productName);
						browser.assert.equal(result.value, productName);
						console.log("End Delete Product Name Object");
					});
				};

			})
			.end();
	}

/////////////////////////////
//END TEST CASE DELETE USER//
/////////////////////////////
};