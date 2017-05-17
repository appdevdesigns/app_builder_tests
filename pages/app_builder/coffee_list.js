require('../../shared_libs/global_config.js');

module.exports = {
	url: 'http://139.59.109.30:1337/page/opsportal',
	elements: {
			menuItem: 'span[app-label-key="opp.menu"]',
			coffeeShopItem: 'li[area="ab-app-coffee-shop"]'
	},
	commands: [{
		selectCoffeeShop: function () {
			this.waitForElementVisible('@menuItem', 99999)
				.click('@menuItem')
				.waitForElementVisible('@coffeeShopItem', 500)
				.click('@coffeeShopItem')
				.waitForElementVisible('@menuItem', 3000)
				.click('@menuItem');


			return this;
		},


	}]
	
};