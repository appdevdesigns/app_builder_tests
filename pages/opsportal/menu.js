module.exports = {
	url: 'http://localhost:1337/page/opsportal',
	elements: {
		menuItem: 'span[app-label-key="opp.menu"]',

		appBuilderItem: 'li[area="app-builder"]',
		coffeeShopItem: 'li[area="ab-app-coffee-shop"]',

		testCoffeeshopApp : 'div[webix_l_id="1"]',

	},
	commands: [{
		selectAppBuilder: function () {
			this
				.waitForElementVisible('@menuItem', 99999)
				.click('@menuItem')
				.waitForElementVisible('@appBuilderItem', 5000)
				.click('@appBuilderItem')
				.click('@menuItem');

			return this;
		},

		selectCoffeeShop: function () {
			this
				.waitForElementVisible('@menuItem', 99999)
				.click('@menuItem')
				.waitForElementVisible('@coffeeShopItem', 5000)
				.click('@coffeeShopItem')
				.click('@menuItem');
			return this;
		},

		selectTestCoffeeShop : function (){
			this
				.waitForElementVisible('@testCoffeeshopApp', 99999)
				.click('@testCoffeeshopApp');
			return this;
		}


	}]
};
