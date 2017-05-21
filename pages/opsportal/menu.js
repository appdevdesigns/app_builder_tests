module.exports = {
	url: 'http://localhost:1337/page/opsportal',
	elements: {
		menuItem: 'span[app-label-key="opp.menu"]',
		appBuilderItem: 'li[area="app-builder"]',
		coffeeShopItem: 'li[area="ab-app-coffee-shop"]'
	},
	commands: [{
		selectAppBuilder: function () {
			this
				.waitForElementVisible('@menuItem', 99999)
				.click('@menuItem')
				.waitForElementVisible('@appBuilderItem', 500)
				.click('@appBuilderItem')
				.click('@menuItem');

			return this;
		},

		selectCoffeeShop: function () {
			this
				.waitForElementVisible('@menuItem', 99999)
				.click('@menuItem')
				.waitForElementVisible('@coffeeShopItem', 500)
				.click('@coffeeShopItem')
				.click('@menuItem');
			return this;
		}
	}]
};
