require('../../shared_libs/global_config.js');

module.exports = {
	url: 'http://localhost:1337/page/opsportal',
	elements: {
		interfaceTabButton: 'div[button_id="ab-app-interface-view"]',
		interfaceList: 'div[view_id="ab-interface-tree"] .ab-interface-list-item',

		addNewPageButton: 'div[view_id="ab-page-new-page"] button:nth-of-type(1)',
		addNewPagePopup: 'div[view_id="ab-interface-add-new-popup"]',
		quickPageTab: 'div[button_id="QuickPage"]',
		blankPageTab: 'div[button_id="BlankPage"]',
		parentQuickPageDropdown: 'div[view_id="ab-quickpage-parent-page"] select',
		selectObjectQuickPageDropdown: 'div[view_id="ab-quickpage-select-object"] select',
		displayGridQuickPageCheckBox: 'div[view_id="ab-quickpage-display-grid"] button',
		addLinkToQuickPageCheckBox: 'div[view_id="ab-quickpage-add-new-button"] button',
		addNewFormQuickPageCheckBox: 'div[view_id="ab-quickpage-add-new-form"] button',
		editDataQuickPageCheckBox: 'div[view_id="ab-quick-edit-data"] button',
		viewDataQuickPageCheckBox: 'div[view_id="ab-quick-view-data"] button',

		interfaceSaveButton: 'div[view_id="ab-interface-save-button"] button',
		// interfaceCancelButton: 'div[view_id="$button19"] button',
		parentBlankPageDropdown: 'div[view_id="ab-interface-add-new-parent-list"] select',
		// nameBlankPageTextbox: 'div[view_id="$text11"] input'
		nameBlankPageTextbox: 'div[view_id="BlankPage"] input',

		interfaceLayoutList: 'div[view_id="view_id="ab-interface-componentList] .ab-component-in-page',

		pageName: 'div[view_id="BlankPage"] input',
		menuComponents : 'div[view_id="ab-component-space"]',
		appInterfaceItem : 'div[view_id="ab-interface-tree"] .webix_tree_item .ab-page-list-item'

	},
	commands: [{
		selectInterfaceTab: function () {
			this.waitForElementVisible('@interfaceTabButton', 5000)
				.click('@interfaceTabButton')

			return this;

		},

		selectInterface: function (index) {
			// console.log("selectInterface_"+index);
			var self = this,
				//deferred = Q.defer(),
				itemSelector = 'div[view_id="ab-interface-tree"] .webix_scroll_cont .webix_tree_branch_1:nth-of-type(#index#) .webix_tree_item .ab-page-list-item';

			itemSelector = itemSelector.replace('#index#', index || 1);

			self.waitForElementVisible(itemSelector, 10000)
				.getText(itemSelector, function (result) {
					// console.log(result);
					global.interfaceNameArray.push(result.value);
				})
				.click(itemSelector);

			return this;
		},

		renameInterface: function (index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id="ab-interface-tree"] .webix_scroll_cont .webix_tree_branch_1:nth-of-type(#index#) .webix_tree_item .ab-page-list-item';

			itemSelector = itemSelector.replace('#index#', index || 1);
			itemSelector += " .ab-page-list-edit"

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			//TODO: Fix rename/delete popup show method
			return this;
		},

		clickAddNewPageButton: function () {
			this.waitForElementVisible('@addNewPageButton', 5000)
				.click('@addNewPageButton')

			return this;
		},

		selectQuickPageTab: function () {
			this.waitForElementVisible('@quickPageTab', 1200)
				.click('@quickPageTab')

			return this;

		},

		selectBlankPageTab: function() {
			this.waitForElementVisible('@blankPageTab', 2000)
				.click('@blankPageTab')

			return this;

		},

		clickDisplayGridQuickPageCheckBox: function () {
			this.waitForElementVisible('@displayGridQuickPageCheckBox', 1200)
				.click('@displayGridQuickPageCheckBox');

			return this;
		},

		clickAddLinkToQuickPageCheckBox: function () {
			this.waitForElementVisible('@addLinkToQuickPageCheckBox', 1200)
				.click('@addLinkToQuickPageCheckBox');

			return this;
		},

		clickAddNewFormQuickPageCheckBox: function () {
			this.waitForElementVisible('@addNewFormQuickPageCheckBox', 1200)
				.click('@addNewFormQuickPageCheckBox');

			return this;
		},

		clickEditDataQuickPageCheckBox: function () {
			this.waitForElementVisible('@editDataQuickPageCheckBox', 1200)
				.click('@editDataQuickPageCheckBox');

			return this;
		},

		clickViewDataQuickPageCheckBox: function () {
			this.waitForElementVisible('@viewDataQuickPageCheckBox', 1200)
				.click('@viewDataQuickPageCheckBox');

			return this;
		},

		clickInterfaceSaveButton: function () {
			this.waitForElementVisible('@interfaceSaveButton', 1200)
				.click('@interfaceSaveButton');

			return this;
		},

		removeLayoutAtIndex: function (index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id="view_id="ab-interface-componentList] .webix_list_item:nth-of-type(#index#) .ab-component-in-page';

			itemSelector = itemSelector.replace('#index#', index || 1);
			itemSelector += ".ab-component-remove";

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			return this;
		},

		editLayoutAtIndex: function (index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id="view_id="ab-interface-componentList] .webix_list_item:nth-of-type(#index#) .ab-component-in-page';

			itemSelector = itemSelector.replace('#index#', index || 1);
			itemSelector += ".ab-component-remove";

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			return this;
		},

		getWebixLayoutId: function (index, interfaceId) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id="ab-interface-componentList"] .webix_list_item:nth-of-type(#index#)';
			global.interfaceId = interfaceId;
			itemSelector = itemSelector.replace('#index#', index || 1);

			self.getAttribute(itemSelector, 'webix_l_id', function (result) {
					var interfaceId = global.interfaceId;
					global.webixIdArray[interfaceId].push(result.value);
				});
			return this;
		},

		enterPageName: function (pageName) {
			this.waitForElementVisible('@pageName', 500)
				.clearValue('@pageName')
				.setValue('@pageName', pageName);

			return this;
		}
	}]
	
};