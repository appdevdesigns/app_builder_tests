equire('../../shared_libs/global_config.js');

module.exports = {
	url: 'http://localhost:1337/page/opsportal',
	elements: {
			menuItem: 'span[app-label-key="opp.menu"]',
			coffeeShopItem: 'li[area="ab-app-coffee-shop"]'
		},
	commands: [{
		selectCoffeeShop: function () {
			this
				.waitForElementVisible('@menuItem', 99999)
				.click('@menuItem')
				.waitForElementVisible('@appBuilderItem', 500)
				.click('@appBuilderItem')
				.click('@menuItem');

			return this;
		}


	}]
	
};