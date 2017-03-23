module.exports = {
	url: 'http://localhost:1337/page/opsportal',
	elements: {
		menuItem: 'span[app-label-key="opp.menu"]',
		appBuilderItem: 'li[area="app-builder"]'
	},
	commands: [{
		selectAppBuilder: function () {
			this
				.waitForElementVisible('@menuItem', 99999)
				.click('@menuItem')
				.waitForElementVisible('@appBuilderItem', 500)
				.click('@appBuilderItem');

			return this;
		}
	}]
};
