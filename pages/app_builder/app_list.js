module.exports = {
	url: 'http://localhost:1337/page/opsportal',
	elements: {
		appList: 'div[view_id="ab-app-list"]',
		appItem: 'div[view_id="ab-app-list"] div.ab-app-list-item',
		appItemName: 'div[view_id="ab-app-list"] div.ab-app-list-item .ab-app-list-name',
		appItemDescription: 'div[view_id="ab-app-list"] div.ab-app-list-item .ab-app-list-description',

		editGear: 'div[view_id="ab-app-list"] .webix_list_item:nth-of-type(#index#) div.ab-app-list-edit',

		editAppPanel: 'div[view_id="ab-app-list-menu"]',
		editAppItem: 'div[view_id="ab-app-list-menu"] .webix_list_item:nth-of-type(1)',
		deleteAppItem: 'div[view_id="ab-app-list-menu"] .webix_list_item:nth-of-type(2)',
		exportAppItem: 'div[view_id="ab-app-list-menu"] .webix_list_item:nth-of-type(3)',

		createNewAppButton: 'div[view_id="ab-app-new-create"] button',

		appForm: 'div[view_id="ab-app-list-form"]',
		appName: 'div[view_id="ab-app-list-name"] input',
		appDescription: 'div[view_id="ab-app-list-description"] textarea',
		appSave: 'div[view_id="ab-app-list-form-save"] button',
		appCancel: 'div[view_id="ab-app-list-form-cancel"] button',

		confirmDeleteButton: 'div[aria-label="Delete application"] div[result="true"]',
		cancelDeleteButton: 'div[aria-label="Delete application"] div[result="false"]'
	},
	commands: [{
		selectApp: function (index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id="ab-app-list"] .webix_list_item:nth-of-type(#index#) .ab-app-list-item';

			itemSelector = itemSelector.replace('#index#', index || 1);

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			return this;
		},

		editApp: function (index) {
			var editGearSelector = this.elements.editGear.selector.replace('#index#', index);

			this.waitForElementVisible(editGearSelector, 4000)
				.click(editGearSelector)
				.waitForElementVisible('@editAppItem', 1000)
				.click('@editAppItem');

			return this;
		},

		createApp: function () {
			this.waitForElementVisible('@createNewAppButton', 4000)
				.click('@createNewAppButton');

			return this;
		},

		deleteApp: function (index) {
			var editGearSelector = this.elements.editGear.selector.replace('#index#', index);

			this.waitForElementVisible(editGearSelector, 4000)
				.click(editGearSelector)
				.waitForElementVisible('@deleteAppItem', 1000)
				.click('@deleteAppItem');

			return this;
		},

		confirmDeleteApp: function () {
			this.waitForElementVisible('@confirmDeleteButton', 4000)
				.click('@confirmDeleteButton');

			return this;
		},

		cancelDeleteApp: function () {
			this.waitForElementVisible('@cancelDeleteButton', 4000)
				.click('@cancelDeleteButton');

			return this;
		},

		exportApp: function (index) {
			var editGearSelector = this.elements.editGear.selector.replace('#index#', index);

			this.waitForElementVisible(editGearSelector, 4000)
				.click(editGearSelector)
				.waitForElementVisible('@exportAppItem', 1000)
				.click('@exportAppItem');

			return this;
		},

		enterAppName: function (appName) {
			this.waitForElementVisible('@appName', 500)
				.clearValue('@appName')
				.setValue('@appName', appName);

			return this;
		},

		enterAppDescription: function (appDescription) {
			this.waitForElementVisible('@appDescription', 500)
				.clearValue('@appDescription')
				.setValue('@appDescription', appDescription);

			return this;
		},

		save: function () {
			this.waitForElementVisible('@appSave', 500)
				.click('@appSave');

			return this;
		},

		cancel: function () {
			this.waitForElementVisible('@appCancel', 500)
				.click('@appCancel');

			return this;
		}



	}]
};
