module.exports = {
	url: 'http://localhost:1337/page/opsportal',
	elements: {
		objectList: 'div[view_id^="ab_work_object_list_editlist"] .webix_list_item .ab-object-list-item',
		objectListSelected: 'div[view_id^="ab_work_object_list_editlist"] .webix_selected .ab-object-list-item',
		objectListSelectedEdit: 'div[view_id^="ab_work_object_list_editlist"] .webix_selected .ab-object-list-item .ab-object-list-edit',
		objectListFilter: '.ab-object-list-filter',
		objectEditInput: '.webix_dt_editor input',
		objectSetting: 'div[view_id^="ab_work_object_list_listsetting"]',
		addNewObjectButton: 'div[view_id^="ab_work_object_list_buttonNew"] button',
		addNewObjectPopup: 'div[view_id^="ab_work_object_list_newObject_component"]',

		blankObjectTab: 'div[button_id="ab-object-add-new-form"]',
		blankObjectPanel: 'div[view_id="ab-object-blank-object-form"]',
		blankObjectNameTextbox: 'div[view_id^="ab_work_object_list_newObject_blank_blank"] input[type="text"]',
		blankObjectSaveButton: 'div[view_id^="ab_work_object_list_newObject_blank_save"] button',
		blankObjectCancelButton: 'div[view_id^="ab_work_object_list_newObject_blank_cancel"] button',

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

		testObjectTestList: 'div[class="ab-object-list-item"]',
		addNewColumnButton: 'div[view_id^="ab_work_object_workspace_buttonAddField"] button',
		selectFieldType: 'div[view_id^="ab_work_object_workspace_popupNewDataField_types"] .webix_inp_static',
		singleLineTextFieldType: 'div[webix_l_id="*Single line text"]',
		longTextFieldType: 'div[webix_l_id="*Long text"]',
		numberFieldType: 'div[webix_l_id="*Number"]',
		dateFieldType: 'div[webix_l_id="*Date"]',
		checkboxFieldType: 'div[webix_l_id="*Checkbox"]',
		selectListFieldType: 'div[webix_l_id="*Select list"]',
		imageAttachmentFieldType: 'div[webix_l_id="*Image Attachment"]',
		userFieldType: 'div[webix_l_id="*User"]',
		addColumn : 'div[view_id^="ab_work_object_workspace_popupNewDataField_buttonSave"] button',

		labelNameTextBox: 'div[view_id^="string_label"] input',
		nameTextBox : 'div[view_id^="string_columnName"] input',
		showIconCheckBox : 'div[view_id^="string_showIcon"] .webix_inp_checkbox_border button',
		stringDefaultTextBox: 'div[view_id^="string_textDefault"] input',
		supportmultilingualCheckBox : 'div[view_id^="string_supportMultilingual"] .webix_inp_checkbox_border button',

		longTextLabelNameTextBox: 'div[view_id^="LongText_label"] input',
		longTextNameTextBox : 'div[view_id^="LongText_columnName"] input',
		longTextShowIconCheckBox : 'div[view_id^="LongText_showIcon"] .webix_inp_checkbox_border button',
		longTextStringDefaultTextBox: 'div[view_id^="LongText_textDefault"] input',
		longTextSupportmultilingualCheckBox : 'div[view_id^="LongText_supportMultilingual"] .webix_inp_checkbox_border button',

		objectSearch: 'div[view_id^="ab_work_object_list_searchText"] .webix_el_box input',
		objectSortAsc: 'div[view_id^="ab_work_object_list_sort"] .webix_all_segments .webix_segment_0',
		objectSortDsc: 'div[view_id^="ab_work_object_list_sort"] .webix_all_segments .webix_segment_N',
		objectGroupUnChecked: 'div[view_id^="ab_work_object_list_group"] .webix_el_box .webix_checkbox_0 button',
		objectGroupChecked: 'div[view_id^="ab_work_object_list_group"] .webix_el_box .webix_checkbox_1 button',

		alertPopUp: '.webix_alert',
		alertYes: '.webix_alert .webix_popup_controls div[aria-label="* yes"]',
		alertCancel: '.webix_alert .webix_popup_controls div[aria-label="* no"]',
		confirmOk: '.webix_confirm .webix_popup_controls div[aria-label="*OK"]',

		numberLabelNameTextBox: 'div[view_id^="number_label"] input',
		numberNameTextBox : 'div[view_id^="number_columnName"] input',
		numbershowIconCheckBox : 'div[view_id^="number_showIcon"] .webix_inp_checkbox_border button',
		numbershowIconCheckBox : 'div[view_id^="number_allowRequired"] .webix_inp_checkbox_border button',
		numberDefaultTextBox: 'div[view_id^="number_numberDefault"] input',
		numberFormatSelect:'div[view_id^="number_typeFormat"] .webix_inp_static',
		numberFormatSelectNone: 'div[webix_l_id="none"]',
		numberFormatSelectDollar: 'div[webix_l_id="dollar"]',
		numberFormatSelectPound: 'div[webix_l_id="pound"]',
		numberFormatSelectEuroBefore: 'div[webix_l_id="euroBefore"]',
		numberFormatSelectEuroAfter: 'div[webix_l_id="euroAfter"]',
		numberFormatSelectPercent: 'div[webix_l_id="percent"]',
		numberDecimalSelect: 'div[view_id^="number_typeDecimals"] .webix_inp_static',
		numberThousands:'div[view_id^="number_typeThousands"] .webix_inp_static',
		numberValidateCheckBox: 'div[view_id^="number_validate"] .webix_inp_checkbox_border button',
		numberValidateMinimum: 'div[view_id^="number_validateMinimum"] input',
		numberValidateMaximum: 'div[view_id^="number_validateMaximum"] input'

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
				itemSelector = 'div[view_id^="ab_work_object_list_editlist"] .webix_list_item:nth-of-type(#index#) .ab-object-list-item';

			itemSelector = itemSelector.replace('#index#', index || 1);

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			return this;
		},

		selectObjectTest: function(){
				this.waitForElementVisible('@testObjectTestList', 10000)
					.click('@testObjectTestList');

			return this;
		},

		selectAddNewColumnButton: function(){
			this.waitForElementVisible('@addNewColumnButton', 10000)
					.click('@addNewColumnButton');

			return this;
		},
		selectFieldTypeButton: function(){
			this.waitForElementVisible('@selectFieldType', 10000)
					.click('@selectFieldType');

			return this;
		},
		selectsingleLineTextFieldType:  function(){
			this.waitForElementVisible('@singleLineTextFieldType', 10000)
					.click('@singleLineTextFieldType');

			return this;
		},
		selectlongTextFieldType: function(){
			this.waitForElementVisible('@longTextFieldType', 10000)
					.click('@longTextFieldType');

			return this;
		},
		selectnumberFieldType: function(){
			this.waitForElementVisible('@numberFieldType', 10000)
					.click('@numberFieldType');

			return this;
		},
		selectdateFieldType: function(){
			this.waitForElementVisible('@dateFieldType', 10000)
					.click('@dateFieldType');

			return this;
		},
		selectcheckboxFieldType: function(){
			this.waitForElementVisible('@checkboxFieldType', 10000)
					.click('@checkboxFieldType');

			return this;
		},
		selectselectListFieldType: function(){
			this.waitForElementVisible('@selectListFieldType', 10000)
					.click('@selectListFieldType');

			return this;
		},
		selectimageAttachmentFieldType: function(){
			this.waitForElementVisible('@imageAttachmentFieldType', 10000)
					.click('@imageAttachmentFieldType');

			return this;
		},
		selectuserFieldType: function(){
			this.waitForElementVisible('@userFieldType', 10000)
					.click('@userFieldType');

			return this;
		},
		addColumnButton: function(){
			this.waitForElementVisible('@addColumn', 10000)
					.click('@addColumn');

			return this;
		},

		enterLabelName: function (labelName) {
			this.waitForElementVisible('@labelNameTextBox', 1200)
				.setValue('@labelNameTextBox', labelName);

			return this;
		},
		enterName: function (Name) {
			this.waitForElementVisible('@nameTextBox', 1200)
				.setValue('@nameTextBox', Name);

			return this;
		},
		clickShowIcon: function(){
			this.waitForElementVisible('@showIconCheckBox', 10000)
					.click('@showIconCheckBox');

			return this;
		},
		enterDefaultName: function (DefaultName) {
			this.waitForElementVisible('@stringDefaultTextBox', 1200)
				.setValue('@stringDefaultTextBox', DefaultName);

			return this;
		},
		clickSupportMultilingual: function(){
			this.waitForElementVisible('@supportmultilingualCheckBox', 10000)
					.click('@supportmultilingualCheckBox');

			return this;
		},

		enterlongTextLabelName: function (labelName) {
			this.waitForElementVisible('@longTextLabelNameTextBox', 1200)
				.setValue('@longTextLabelNameTextBox', labelName);

			return this;
		},
		enterlongTextName: function (Name) {
			this.waitForElementVisible('@longTextNameTextBox', 1200)
				.setValue('@longTextNameTextBox', Name);

			return this;
		},
		clicklongTextShowIcon: function(){
			this.waitForElementVisible('@longTextShowIconCheckBox', 10000)
					.click('@longTextShowIconCheckBox');

			return this;
		},
		enterlongTextDefaultName: function (DefaultName) {
			this.waitForElementVisible('@longTextStringDefaultTextBox', 1200)
				.setValue('@longTextStringDefaultTextBox', DefaultName);

			return this;
		},
		clicklongTextSupportMultilingual: function(){
			this.waitForElementVisible('@longTextSupportmultilingualCheckBox', 10000)
					.click('@longTextSupportmultilingualCheckBox');

			return this;
		},
		clearSortSeachValue: function() {
			this.waitForElementVisible('@objectSearch', 500)
				.clearValue('@objectSearch')
				.waitForElementVisible('@objectListFilter', 500, true, function(){
					this
						.element('css selector', 'div[view_id^="ab_work_object_list_group"] .webix_el_box .webix_checkbox_1 button', function(result){
						    if(result.status != -1){
						        //Element exists, do something
						        this.click('div[view_id^="ab_work_object_list_group"] .webix_el_box .webix_checkbox_1 button');
						    } else {
						        //Element does not exist, do something else
						    }
						});
				}, "Just Clear Value Please ignore this error message")

			return this;
		},
		searchObject: function (objectName) {
			this.waitForElementVisible('@objectSearch', 500)
				.clearValue('@objectSearch')
				.setValue('@objectSearch', objectName);	
			return this;
		},

		enterNumberLabelName: function (labelName) {
			this.waitForElementVisible('@numberLabelNameTextBox', 1200)
				.setValue('@numberLabelNameTextBox', labelName);

			return this;
		},
		enterNumberName: function (Name) {
			this.waitForElementVisible('@numberNameTextBox', 1200)
				.setValue('@numberNameTextBox', Name);

			return this;
		},

		sortObjectAscending: function () {
			this.waitForElementVisible('@objectSortAsc', 500)
				.click('@objectSortAsc');
							
			return this;
		},
		sortObjectDescending: function () {
			this.waitForElementVisible('@objectSortDsc', 500)
				.click('@objectSortDsc');
							
			return this;
		},
		groupObject: function () {
			this.waitForElementVisible('@objectGroupUnChecked', 500)
				.click('@objectGroupUnChecked');
							
			return this;
		},
		unGroupObject: function () {
			this.waitForElementVisible('@objectGroupChecked', 500)
				.click('@objectGroupChecked');
							
			return this;
		},
		deleteObject: function(index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id^="ab_work_object_list_editlist"] .webix_list_item:nth-of-type(#index#) .ab-object-list-item .ab-object-list-edit';

			itemSelector = itemSelector.replace('#index#', index || 1);

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			return this;
		},
		clickObjectInList: function(index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id^="ab_work_object_list_editlist"] .webix_list_item:nth-of-type(#index#) .ab-object-list-item';

			itemSelector = itemSelector.replace('#index#', (index+1) || 2);

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			return this;
		},
		getObjectNameToArray: function(index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id^="ab_work_object_list_editlist"] .webix_list_item:nth-of-type(#index#) .ab-object-list-item';

			itemSelector = itemSelector.replace('#index#', (index+1) || 2);

			self.getText(itemSelector, function (result) {
				global.objectNameArray.push(result.value);
			});

			return this;
		},
		getObjectNameToArray2: function(index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id^="ab_work_object_list_editlist"] .webix_list_item:nth-of-type(#index#) .ab-object-list-item';

			itemSelector = itemSelector.replace('#index#', (index+1) || 2);

			self.getText(itemSelector, function (result) {
				global.objectNameArray2.push(result.value);
			});

			return this;
		},
		alertYes: function() {
			this.waitForElementVisible('@alertYes', 500)
				.click('@alertYes');
							
			return this;
		},
		alertCancel: function() {
			this.waitForElementVisible('@alertCancel', 500)
				.click('@alertCancel');
							
			return this;
		},
		confirmOk: function() {
			this.waitForElementVisible('@confirmOk', 500)
				.click('@confirmOk');
							
			return this;
		},
		editRenameInput: function(value) {
			this.waitForElementVisible('@objectEditInput', 500)
				.setValue('@objectEditInput', value);

			return this;
		},
		objectSettingsClick: function() {
			this.waitForElementVisible('@objectSetting', 500, true, function(){
					this
						.element('css selector', '.webix_accordionitem_body', function(result){
						    if(result.status != -1){
						        //Element exists, do something
						        this.click('div[view_id^="ab_work_object_list_listsetting"]');
						    } else {
						        //Element does not exist, do something else
						    }
						});
				}, "Check Object Setting is Expanded!")
			return this;
		}
	}]
};
