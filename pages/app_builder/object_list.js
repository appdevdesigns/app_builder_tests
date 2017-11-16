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
		addNewColumnButton: 'div[view_id^="ab_work_object_workspace_buttonAddField"] .webix_el_box button',
		selectFieldType: 'div[view_id^="ab_work_object_workspace_popupNewDataField_types"] .webix_el_box .webix_inp_static',
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
		numberRequiredCheckBox : 'div[view_id^="number_allowRequired"] .webix_inp_checkbox_border button',
		numberDefaultTextBox: 'div[view_id^="number_numberDefault"] input',

		numberFormatSelect:'div[view_id^="number_typeFormat"] .webix_inp_static',
		numberFormatSelectNone: 'div[webix_l_id="none"]',
		numberFormatSelectDollar: 'div[webix_l_id="dollar"]',
		numberFormatSelectPound: 'div[webix_l_id="pound"]',
		numberFormatSelectEuroBefore: 'div[webix_l_id="euroBefore"]',
		numberFormatSelectEuroAfter: 'div[webix_l_id="euroAfter"]',
		numberFormatSelectPercent: 'div[webix_l_id="percent"]',

		numberDecimalSelect: 'div[view_id^="number_typeDecimals"] .webix_inp_static',
		numberDecimalSelectNone: 'div[view_id^="number_typeDecimals"] .webix_inp_static',
		numberDecimalSelectComma: 'div[webix_l_id="comma"]',
		numberDecimalSelectPeriod: 'div[webix_l_id="period"]',
		numberDecimalSelectSpace: 'div[webix_l_id="space"]',

		numberThousandsSelect: 'div[view_id^="number_typeThousands"] .webix_inp_static',
		numberThousandsSelectNone : 'div[webix_l_id="comma"]',
		numberThousandsSelectComma: 'div[webix_l_id="comma"]',
		numberThousandsSelectPeriod: 'div[webix_l_id="period"]',
		numberThousandsSelectSpace: 'div[webix_l_id="space"]',

		numberValidateCheckBox: 'div[view_id^="number_validate"] .webix_inp_checkbox_border button',
		numberValidateMinimum: 'div[view_id^="number_validateMinimum"] input',
		numberValidateMaximum: 'div[view_id^="number_validateMaximum"] input',

		calcelAddNewColumnButton : 'div[class="ab-cancel-button"]',

		//date
		dateLabelNameTextBox: 'div[view_id^="date_label"] input',
		dateNameTextBox : 'div[view_id^="date_columnName"] input',
		dateShowIconCheckBox : 'div[view_id^="date_showIcon"] .webix_inp_checkbox_border button',
		dateIncludeTimeCheckBox : 'div[view_id^="date_ab-date-include-time"] .webix_inp_checkbox_border button',
		dateSetCurrentdateDefaultValue : 'div[view_id^="date_ab-date-current-to-default"] .webix_inp_checkbox_border button',
		
		dateDayItem : 'div[view_id="$accordionitem1"]',
		dateMonthItem : 'div[view_id="$accordionitem2"]',
		dateYearItem : 'div[view_id="$accordionitem3"]',

		dateDayFormat : 'div[view_id^="date_ab-date-day-format"] .webix_inp_static',
		dateDayPlaces : 'div[view_id^="date_ab-date-day-order"] .webix_inp_static',

		dateDayFormatPercentJ : 'div[webix_l_id="%j"]',
		dateDayFormatPercentd : 'div[webix_l_id="%d"]',
		dateDayFormatPercentD : 'div[webix_l_id="%D"]',
		dateDayFormatPercentl : 'div[webix_l_id="%l"]',

		dateMonthFormat : 'div[view_id^="date_ab-date-month-format"] .webix_inp_static',
		dateMonthPlaces : 'div[view_id^="date_ab-date-month-order"] .webix_inp_static',

		dateMonthFormatPercentn : 'div[webix_l_id="%n"]',
		dateMonthFormatPercentm : 'div[webix_l_id="%m"]',
		dateMonthFormatPercentM : 'div[webix_l_id="%M"]',
		dateMonthFormatPercentF : 'div[webix_l_id="%F"]',

		dateYearFormat : 'div[view_id^="date_ab-date-year-format"] .webix_inp_static',
		dateYearPlaces : 'div[view_id^="date_ab-date-year-order"] .webix_inp_static',

		dateYearFormatPercenty : 'div[webix_l_id="%y"]',
		dateYearFormatPercentY : 'div[webix_l_id="%Y"]',

		dateDayPlaces1 :'div[view_id="$suggest10"] .webix_list_item:nth-of-type(1)',
		dateDayPlaces2 :'div[view_id="$suggest10"] .webix_list_item:nth-of-type(2)',
		dateDayPlaces3 :'div[view_id="$suggest10"] .webix_list_item:nth-of-type(3)',

		dateMonthPlaces1 :'div[view_id="$suggest12"] .webix_list_item:nth-of-type(1)',
		dateMonthPlaces2 :'div[view_id="$suggest12"] .webix_list_item:nth-of-type(2)',
		dateMonthPlaces3 :'div[view_id="$suggest12"] .webix_list_item:nth-of-type(3)',

		dateYearPlaces1 :'div[view_id="$suggest14"] .webix_list_item:nth-of-type(1)',
		dateYearPlaces2 :'div[view_id="$suggest14"] .webix_list_item:nth-of-type(2)',
		dateYearPlaces3 :'div[view_id="$suggest14"] .webix_list_item:nth-of-type(3)',

		dateDayFormatCommaRadio : 'div[radio_id="comma"]',
		dateDayFormatSlashdio : 'div[radio_id="slash"]',
		dateDayFormatSpaceRadio : 'div[radio_id="space"]',
		dateDayFormatDashRadio : 'div[radio_id="dash"]',
		dateDayFormatColonRadio : 'div[radio_id="colon"]',

		validateCondition : 'div[view_id^="date_ab-date-validate-condition"] select',
		dateRangeCondition : 'option[value="dateRange"]',
		betweenCondition : 'option[value="between"]',
		notBetweenCondition : 'option[value="notBetween"]',
		equalCondition : 'option[value="="]',
		notEqualCondition : 'option[value="<>"]',
		morethanCondition : 'option[value=">"]',
		lessthanCondition : 'option[value="<"]',
		morethanequalCondition : 'option[value=">="]',
		lessthanequalCondition : 'option[value="<="]',



		//checkbox
		checkboxLabelNameTextBox: 'div[view_id^="boolean_label"] input',
		checkboxNameTextBox : 'div[view_id^="boolean_columnName"] input',
		checkboxshowIconCheckBox : 'div[view_id^="boolean_showIcon"] .webix_inp_checkbox_border button',
		checkboxDefault : 'div[view_id^="boolean_default"] .webix_inp_checkbox_border button',

		//select List
		selectlistLabelNameTextBox: 'div[view_id^="list_label"] input',
		selectlistNameTextBox : 'div[view_id^="list_columnName"] input', 
		selectlistshowIconCheckBox : 'div[view_id^="list_showIcon"] .webix_inp_checkbox_border button',

		//imageAttachment
		imageAttachmentLabelNameTextBox: 'div[view_id^="image_label"] input',
		imageAttachmentNameTextBox : 'div[view_id^="image_columnName"] input', 
		imageAttachmenthowIconCheckBox : 'div[view_id^="image_showIcon"] .webix_inp_checkbox_border button',
		imageAttachmentWidthCheckBox : 'div[view_id^="image_useWidth"] .webix_inp_checkbox_border button',
		imageAttachmentHeightCheckBox : 'div[view_id^="image_useHeight"] .webix_inp_checkbox_border button',
		imageAttachmentWidthInput : 'div[view_id^="image_imageWidth"] input',
		imageAttachmentHeightInput : 'div[view_id^="image_imageHeight"] input',

		//User
		userLabelNameTextBox: 'div[view_id^="user_label"] input',
		userNameTextBox : 'div[view_id^="user_columnName"] input', 	
		usershowIconCheckBox : 'div[view_id^="user_showIcon"] .webix_inp_checkbox_border button',
		useruserabusermultipleoptionCheckBox : 'div[view_id^="user_ab-user-multiple-option"] .webix_inp_checkbox_border button',
		userDefaultValueCheckBox : 'div[view_id^="user_ab-user-current-user-option"] .webix_inp_checkbox_border button',
		userEditTableCheckBox : 'div[view_id^="user_ab-user-editable"] .webix_inp_checkbox_border button',

		addNewRowButton : 'div[view_id^="ab_work_object_workspace_buttonRowNew"] button',

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

		//add new row
		clickAddNewRowButton: function () {
			this.waitForElementVisible('@addNewRowButton', 1200)
				.click('@addNewRowButton') // Click add new object

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
			this.waitForElementVisible('@addNewColumnButton', 1000)
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
		},
		//Number
		cancelAddNewColumnButton: function() {
			this.waitForElementVisible('@calcelAddNewColumnButton', 1000)
				.click('@calcelAddNewColumnButton');
							
			return this;
		},
		clickNumbershowIconCheckBox : function() {
			this.waitForElementVisible('@numbershowIconCheckBox', 1000)
				.click('@numbershowIconCheckBox');
							
			return this;
		},
		clickNumberRequiredCheckBox : function() {
			this.waitForElementVisible('@numberRequiredCheckBox', 1000)
				.click('@numberRequiredCheckBox');
							
			return this;
		},
		enterNumberDefaultValue: function (DefaultValue) {
			this.waitForElementVisible('@numberDefaultTextBox', 1200)
				.setValue('@numberDefaultTextBox', DefaultValue);

			return this;
		},
		numberFormatSelect : function(){
			this.waitForElementVisible('@numberFormatSelect', 1000)
				.click('@numberFormatSelect');
							
			return this;
		},
		selectNumberFormatSelectNone : function(){
			this.waitForElementVisible('@numberFormatSelectNone', 1000)
				.click('@numberFormatSelectNone');
							
			return this;
		},
		selectNumberFormatSelectDollar : function(){
			this.waitForElementVisible('@numberFormatSelectDollar', 1000)
				.click('@numberFormatSelectDollar');
							
			return this;
		},
		selectNumberFormatSelectPound : function(){
			this.waitForElementVisible('@numberFormatSelectPound', 1000)
				.click('@numberFormatSelectPound');
							
			return this;
		},
		selectNumberFormatSelectEuroBefore : function(){
			this.waitForElementVisible('@numberFormatSelectEuroBefore', 1000)
				.click('@numberFormatSelectEuroBefore');
							
			return this;
		},
		selectNumberFormatSelectEuroAfter : function(){
			this.waitForElementVisible('@numberFormatSelectEuroAfter', 1000)
				.click('@numberFormatSelectEuroAfter');
							
			return this;
		},
		selectNumberFormatSelectPercent : function(){
			this.waitForElementVisible('@numberFormatSelectPercent', 1000)
				.click('@numberFormatSelectPercent');
							
			return this;
		},

		selectNumberDecimalSelect : function(){
			this.waitForElementVisible('@numberDecimalSelect', 1000)
				.click('@numberDecimalSelect');
							
			return this;
		},
		selectNumberDecimalSelectComma : function(){
			this.waitForElementVisible('@numberDecimalSelectComma: ', 1000)
				.click('@numberDecimalSelectComma: ');
							
			return this;
		},
		selectNumberDecimalSelectPeriod : function(){
			this.waitForElementVisible('@numberDecimalSelectPeriod: ', 1000)
				.click('@numberDecimalSelectPeriod: ');
							
			return this;
		},
		selectNumberDecimalSelectSpace : function(){
			this.waitForElementVisible('@numberDecimalSelectSpace: ', 1000)
				.click('@numberDecimalSelectSpace: ');
							
			return this;
		},

		selectNumberThousandsSelect : function(){
			this.waitForElementVisible('@numberThousandsSelect', 1000)
				.click('@numberThousandsSelect');
							
			return this;
		},
		numberThousandsSelectComma : function(){
			this.waitForElementVisible('@numberThousandsSelectComma', 1000)
				.click('@numberThousandsSelectComma');
							
			return this;
		},
		numberThousandsSelectPeriod : function(){
			this.waitForElementVisible('@numberThousandsSelectPeriod', 1000)
				.click('@numberThousandsSelectPeriod');
							
			return this;
		},
		numberThousandsSelectSpace : function(){
			this.waitForElementVisible('@numberThousandsSelectSpace', 1000)
				.click('@numberThousandsSelectSpace');
							
			return this;
		},

		enterNumberDefaultValue: function (DefaultValue) {
			this.waitForElementVisible('@numberDefaultTextBox', 1200)
				.setValue('@numberDefaultTextBox', DefaultValue);

			return this;
		},
		selectNumberDecimals: function (index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id^="number_typeDecimals"] .webix_list_item:nth-of-type(#index#) .ab-object-list-item';

			itemSelector = itemSelector.replace('#index#', index || 1);

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			return this;
		},

		//date
		enterDateLabelNameTextBox: function (dateLabelName) {
			this.waitForElementVisible('@dateLabelNameTextBox', 1200)
				.setValue('@dateLabelNameTextBox', dateLabelName);

			return this;
		},
		enterdateNameTextBox: function (dateName) {
			this.waitForElementVisible('@dateNameTextBox', 1200)
				.setValue('@dateNameTextBox', dateName);

			return this;
		},		
		dateShowIconCheckBox : function(){
			this.waitForElementVisible('@dateShowIconCheckBox', 1000)
				.click('@dateShowIconCheckBox');
							
			return this;
		},
		dateIncludeTimeCheckBox : function(){
			this.waitForElementVisible('@dateIncludeTimeCheckBox', 1000)
				.click('@dateIncludeTimeCheckBox');
							
			return this;
		},
		dateIncludeTimeCheckBox : function(){
			this.waitForElementVisible('@dateSetCurrentdateDefaultValue', 1000)
				.click('@dateSetCurrentdateDefaultValue');
							
			return this;
		},
		dateDayItem : function(){
			this.waitForElementVisible('@dateDayItem', 1000)
				.click('@dateDayItem');
							
			return this;
		},
		dateMonthItem : function(){
			this.waitForElementVisible('@dateMonthItem', 1000)
				.click('@dateMonthItem');
							
			return this;
		},
		dateYearItem : function(){
			this.waitForElementVisible('@dateYearItem', 1000)
				.click('@dateYearItem');
							
			return this;
		},

		dateDayFormat  : function(){
			this.waitForElementVisible('@dateDayFormat', 1000)
				.click('@dateDayFormat');
							
			return this;
		},
		dateMonthFormat  : function(){
			this.waitForElementVisible('@dateMonthFormat', 5000)
				.click('@dateMonthFormat ');
							
			return this;
		},
		dateYearFormat  : function(){
			this.waitForElementVisible('@dateYearFormat', 1000)
				.click('@dateYearFormat ');
							
			return this;
		},

		dateDayPlaces  : function(){
			this.waitForElementVisible('@dateDayPlaces', 1000)
				.click('@dateDayPlaces ');
							
			return this;
		},
		dateMonthPlaces  : function(){
			this.waitForElementVisible('@dateMonthPlaces', 1000)
				.click('@dateMonthPlaces ');
							
			return this;
		},
		dateYearPlaces   : function(){
			this.waitForElementVisible('@dateYearPlaces ', 1000)
				.click('@dateYearPlaces  ');
							
			return this;
		},

		dateDayFormatPercentJ : function(){
			this.waitForElementVisible('@dateDayFormatPercentJ', 1000)
				.click('@dateDayFormatPercentJ');
							
			return this;
		},
		dateDayFormatPercentd : function(){
			this.waitForElementVisible('@dateDayFormatPercentd', 1000)
				.click('@dateDayFormatPercentd');
							
			return this;
		},
		dateDayFormatPercentD : function(){
			this.waitForElementVisible('@dateDayFormatPercentD', 1000)
				.click('@dateDayFormatPercentD');
							
			return this;
		},
		dateDayFormatPercentl : function(){
			this.waitForElementVisible('@dateDayFormatPercentl', 1000)
				.click('@dateDayFormatPercentl');
							
			return this;
		},
		dateMonthFormatPercentn : function(){
			this.waitForElementVisible('@dateMonthFormatPercentn', 1000)
				.click('@dateMonthFormatPercentn');
							
			return this;
		},
		dateMonthFormatPercentm : function(){
			this.waitForElementVisible('@dateMonthFormatPercentm', 1000)
				.click('@dateMonthFormatPercentm');
							
			return this;
		},
		dateMonthFormatPercentM : function(){
			this.waitForElementVisible('@dateMonthFormatPercentM', 1000)
				.click('@dateMonthFormatPercentM');
							
			return this;
		},
		dateMonthFormatPercentF : function(){
			this.waitForElementVisible('@dateMonthFormatPercentF', 1000)
				.click('@dateMonthFormatPercentF');
							
			return this;
		},
		dateYearFormatPercenty : function(){
			this.waitForElementVisible('@dateYearFormatPercenty', 1000)
				.click('@dateYearFormatPercenty');
							
			return this;
		},
		dateYearFormatPercentY : function(){
			this.waitForElementVisible('@dateYearFormatPercentY', 1000)
				.click('@dateYearFormatPercentY');
							
			return this;
		},

		dateDayPlaces1 : function(){
			this.waitForElementVisible('@dateDayPlaces1', 1000)
				.click('@dateDayPlaces1');
							
			return this;
		},
		dateDayPlaces2 : function(){
			this.waitForElementVisible('@dateDayPlaces2', 1000)
				.click('@dateDayPlaces2');
							
			return this;
		},
		dateDayPlaces3 : function(){
			this.waitForElementVisible('@dateDayPlaces3', 1000)
				.click('@dateDayPlaces3');
							
			return this;
		},

		dateMonthPlaces1 : function(){
			this.waitForElementVisible('@dateMonthPlaces1', 1000)
				.click('@dateMonthPlaces1');
							
			return this;
		},
		dateMonthPlaces2 : function(){
			this.waitForElementVisible('@dateMonthPlaces2', 1000)
				.click('@dateMonthPlaces2');
							
			return this;
		},
		dateMonthPlaces3 : function(){
			this.waitForElementVisible('@dateMonthPlaces3', 1000)
				.click('@dateMonthPlaces3');
							
			return this;
		},
		dateYearPlaces1 : function(){
			this.waitForElementVisible('@dateYearPlaces1', 1000)
				.click('@dateYearPlaces1');
							
			return this;
		},
		dateYearPlaces2 : function(){
			this.waitForElementVisible('@dateYearPlaces2', 1000)
				.click('@dateYearPlaces2');
							
			return this;
		},
		dateYearPlaces3 : function(){
			this.waitForElementVisible('@dateYearPlaces3', 1000)
				.click('@dateYearPlaces3');
							
			return this;
		},

		dateDayFormatCommaRadio : function(){
			this.waitForElementVisible('@dateDayFormatCommaRadio', 1000)
				.click('@dateDayFormatCommaRadio');
							
			return this;
		},
		dateDayFormatSlashdio : function(){
			this.waitForElementVisible('@dateDayFormatSlashdio', 1000)
				.click('@dateDayFormatSlashdio');
							
			return this;
		},
		dateDayFormatSpaceRadio : function(){
			this.waitForElementVisible('@dateDayFormatSpaceRadio', 1000)
				.click('@dateDayFormatSpaceRadio');
							
			return this;
		},
		dateDayFormatDashRadio : function(){
			this.waitForElementVisible('@dateDayFormatDashRadio', 1000)
				.click('@dateDayFormatDashRadio');
							
			return this;
		},
		dateDayFormatColonRadio : function(){
			this.waitForElementVisible('@dateDayFormatColonRadio', 1000)
				.click('@dateDayFormatColonRadio');
							
			return this;
		},


		//Checkbox
		enterCheckboxLabelNameTextBox: function (checkboxLabelName) {
			this.waitForElementVisible('@checkboxLabelNameTextBox', 1200)
				.setValue('@checkboxLabelNameTextBox', checkboxLabelName);

			return this;
		},
		entercheckboxNameTextBox: function (checkboxName) {
			this.waitForElementVisible('@checkboxNameTextBox', 1200)
				.setValue('@checkboxNameTextBox', checkboxName);

			return this;
		},
		checkboxshowIconCheckBox : function(){
			this.waitForElementVisible('@checkboxshowIconCheckBox', 1000)
				.click('@checkboxshowIconCheckBox');
							
			return this;
		},
		checkboxDefault : function(){
			this.waitForElementVisible('@checkboxDefault', 1000)
				.click('@checkboxDefault');
							
			return this;
		},

		//selectselectListFieldType
		enterselectlistLabelNameTextBox: function (selectlistLabelName) {
			this.waitForElementVisible('@selectlistLabelNameTextBox', 1200)
				.setValue('@selectlistLabelNameTextBox', selectlistLabelName);

			return this;
		},
		enterselectlistNameTextBox: function (selectlistName) {
			this.waitForElementVisible('@selectlistNameTextBox', 1200)
				.setValue('@selectlistNameTextBox', selectlistName);

			return this;
		},
		selectlistshowIconCheckBox : function(){
			this.waitForElementVisible('@selectlistshowIconCheckBox', 1000)
				.click('@selectlistshowIconCheckBox');
							
			return this;
		},

		//selectimageAttachmentFieldType
		enterimageAttachmentLabelNameTextBox: function (imageAttachmentLabelName) {
			this.waitForElementVisible('@imageAttachmentLabelNameTextBox', 1200)
				.setValue('@imageAttachmentLabelNameTextBox', imageAttachmentLabelName);

			return this;
		},
		enterimageAttachmentNameTextBox: function (imageAttachmentName) {
			this.waitForElementVisible('@imageAttachmentNameTextBox', 1200)
				.setValue('@imageAttachmentNameTextBox', imageAttachmentName);

			return this;
		},
		imageAttachmenthowIconCheckBox : function(){
			this.waitForElementVisible('@imageAttachmenthowIconCheckBox', 1000)
				.click('@imageAttachmenthowIconCheckBox');
							
			return this;
		},
		imageAttachmentWidthCheckBox : function(){
			this.waitForElementVisible('@imageAttachmentWidthCheckBox', 1000)
				.click('@imageAttachmentWidthCheckBox');
							
			return this;
		},
		imageAttachmentHeightCheckBox : function(){
			this.waitForElementVisible('@imageAttachmentHeightCheckBox', 1000)
				.click('@imageAttachmentHeightCheckBox');
							
			return this;
		},
		imageAttachmentWidthInput: function (imageAttachmentWidth) {
			this.waitForElementVisible('@imageAttachmentWidthInput', 1200)
				.setValue('@imageAttachmentWidthInput', imageAttachmentWidth);

			return this;
		},
		imageAttachmentHeightInput: function (imageAttachmentHeight) {
			this.waitForElementVisible('@imageAttachmentHeightInput', 1200)
				.setValue('@imageAttachmentHeightInput', imageAttachmentHeight);

			return this;
		},

		//User
		enterUserLabelNameTextBox: function (userLabelName) {
			this.waitForElementVisible('@userLabelNameTextBox', 1200)
				.setValue('@userLabelNameTextBox', userLabelName);

			return this;
		},
		enterUserNameTextBox: function (userName) {
			this.waitForElementVisible('@userNameTextBox', 1200)
				.setValue('@userNameTextBox', userName);

			return this;
		},
		usershowIconCheckBox : function(){
			this.waitForElementVisible('@usershowIconCheckBox', 1000)
				.click('@usershowIconCheckBox');
							
			return this;
		},
		useruserabusermultipleoptionCheckBox : function(){
			this.waitForElementVisible('@useruserabusermultipleoptionCheckBox', 1000)
				.click('@useruserabusermultipleoptionCheckBox');
							
			return this;
		},
		userDefaultValueCheckBox : function(){
			this.waitForElementVisible('@userDefaultValueCheckBox', 1000)
				.click('@userDefaultValueCheckBox');
							
			return this;
		},
		userEditTableCheckBox : function(){
			this.waitForElementVisible('@userEditTableCheckBox', 1000)
				.click('@userEditTableCheckBox');
							
			return this;
		},
		validateCondition  : function(){
			this.waitForElementVisible('@validateCondition', 1000)
				.click('@validateCondition');
							
			return this;
		},
		dateRangeCondition : function(){
			this.waitForElementVisible('@dateRangeCondition', 1000)
				.click('@dateRangeCondition');
							
			return this;
		},
		betweenCondition : function(){
			this.waitForElementVisible('@betweenCondition', 1000)
				.click('@betweenCondition');
							
			return this;
		},
		notBetweenCondition : function(){
			this.waitForElementVisible('@notBetweenCondition', 1000)
				.click('@notBetweenCondition');
							
			return this;
		},
		equalCondition : function(){
			this.waitForElementVisible('@equalCondition', 1000)
				.click('@equalCondition');
							
			return this;
		},
		notEqualCondition : function(){
			this.waitForElementVisible('@notEqualCondition', 1000)
				.click('@notEqualCondition');
							
			return this;
		},
		morethanCondition : function(){
			this.waitForElementVisible('@morethanCondition', 1000)
				.click('@morethanCondition');
							
			return this;
		},
		lessthanCondition : function(){
			this.waitForElementVisible('@lessthanCondition', 1000)
				.click('@lessthanCondition');
							
			return this;
		},
		morethanequalCondition : function(){
			this.waitForElementVisible('@morethanequalCondition', 1000)
				.click('@morethanequalCondition');
							
			return this;
		},
		lessthanequalCondition : function(){
			this.waitForElementVisible('@lessthanequalCondition', 1000)
				.click('@lessthanequalCondition');
							
			return this;
		},
		getColumnHeaderValue: function(index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'td[column="#index#"] .webix_hcell';

			itemSelector = itemSelector.replace('#index#', 0);

			self.getText(itemSelector, function (result) {
				//console.log("getColumnHeaderValue:" + result.value);
				return result.value;
			});

			return this;
		},
		getColumnValue: function(index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[column="#index#"] .webix_cell';

			itemSelector = itemSelector.replace('#index#', 0);

			self.getText(itemSelector, function (result) {
				//console.log("getColumnValue:" + result.value);
				return result.value;
			});

			
		},


	}]
};
