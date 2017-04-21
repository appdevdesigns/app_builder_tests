module.exports = {
	url: 'http://localhost:1337/page/opsportal',
	elements: {
		objectList: 'div[view_id="ab-object-list"] .ab-object-list-item',

		addNewObjectButton: 'div[view_id="ab-object-add-new-button"] button',
		addNewObjectPopup: 'div[view_id="ab-object-add-new-popup"]',

		blankObjectTab: 'div[button_id="ab-object-add-new-form"]',
		blankObjectPanel: 'div[view_id="ab-object-blank-object-form"]',
		blankObjectNameTextbox: 'div[view_id="ab-object-blank-object-form"] input[type="text"]',
		blankObjectSaveButton: 'div[view_id="ab-object-blank-object-save"] button',
		blankObjectCancelButton: 'div[view_id="ab-object-blank-object-cancel"] button',

		existsObjectTab: 'div[button_id="ab-object-import-model-form"]',
		existsObjectPanel: 'div[view_id="ab-object-import-model-form"]',
		existsObjectList: 'div[view_id="ab-object-import-model-list"]',
		existsObjectItem: 'div[view_id="ab-object-import-model-list"] .webix_list_item:nth-of-type(1)',
		existsObjectSaveButton: 'div[view_id="ab-object-import-model-save"] button',
		existsObjectCancelButton: 'div[view_id="ab-object-import-model-cancel"] button',

		importCsvObjectTab: 'div[button_id="ab-object-csv-import-form"]',
		importCsvObjectPanel: 'div[view_id="ab-object-csv-import-form"]',
		importCsvObjectNameTextbox: 'div[view_id="ab-object-csv-import-object-name"] input',
		importCsvObjectSaveButton: 'div[view_id="ab-object-csv-import-save"] button',
		importCsvObjectCancelButton: 'div[view_id="ab-object-csv-import-cancel"] button',

		objectAlertDialog: 'div[class="webix_modal_box webix_confirm"]',
		objectAlertDialogButton: 'div[class="webix_modal_box webix_confirm"] button',
	},
	commands: [{
		// Add new object
		clickAddNewObject: function () {
			this.waitForElementVisible('@addNewObjectButton', 1200)
				.click('@addNewObjectButton') // Click add new object

			return this;
		},

		// Add new empty object
		changeNewEmptyObject: function () {
			this.waitForElementVisible('@blankObjectTab', 1200)
				.click('@blankObjectTab');

			return this;
		},
		enterBlankObjectName: function (objectName) {
			this.waitForElementVisible('@blankObjectNameTextbox', 1200)
				.setValue('@blankObjectNameTextbox', objectName);

			return this;
		},
		saveBlankObject: function () {
			this.waitForElementVisible('@blankObjectSaveButton', 500)
				.click('@blankObjectSaveButton');

			return this;
		},
		cancelBlankObject: function () {
			this.waitForElementVisible('@blankObjectCancelButton', 500)
				.click('@blankObjectCancelButton');

			return this;
		},

		// Import exists object
		changeToImportExistsObject: function () {
			this.waitForElementVisible('@existsObjectTab', 1200)
				.click('@existsObjectTab');

			return this;
		},
		selectExistsObject: function () {
			this.waitForElementVisible('@existsObjectItem', 1200)
				.click('@existsObjectItem');

			return this;
		},
		saveImportExistsObject: function () {
			this.waitForElementVisible('@existsObjectSaveButton', 500)
				.click('@existsObjectSaveButton');

			return this;
		},
		cancelImportExistsObject: function () {
			this.waitForElementVisible('@existsObjectCancelButton', 500)
				.click('@existsObjectCancelButton');

			return this;
		},

		// Import CSV object
		changeToCsvObject: function () {
			this.waitForElementVisible('@importCsvObjectTab', 1200)
				.click('@importCsvObjectTab');

			return this;
		},
		enterCsvObjectName: function (objectName) {
			this.waitForElementVisible('@importCsvObjectNameTextbox', 500)
				.setValue('@importCsvObjectNameTextbox', objectName);

			return this;
		},
		saveCsvObject: function () {
			this.waitForElementVisible('@importCsvObjectSaveButton', 500)
				.click('@importCsvObjectSaveButton');

			return this;
		},
		cancelCsvObject: function () {
			this.waitForElementVisible('@importCsvObjectCancelButton', 500)
				.click('@importCsvObjectCancelButton');

			return this;
		},
		selectObject: function (index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id="ab-object-list"] .webix_list_item:nth-of-type(#index#) .ab-object-list-item';

			itemSelector = itemSelector.replace('#index#', index || 1);

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			return this;
		}


	}]
};
