module.exports = {
	url: 'http://localhost:1337/page/opsportal',
	elements: {

		addUserButton: 'div[view_id="ab_live_item_13_28"] .webix_scroll_cont a[webix_l_id="14"]',
		userListButton: 'div[view_id="ab_live_item_13_28"] .webix_scroll_cont a[webix_l_id="15"]',
		addProductButton: 'div[view_id="ab_live_item_13_28"] .webix_scroll_cont a[webix_l_id="16"]',
		productListButton: 'div[view_id="ab_live_item_13_28"] .webix_scroll_cont a[webix_l_id="17"]',
		linkPageButton: 'div[view_id="ab_live_item_13_28"] .webix_scroll_cont a[webix_l_id="18"]',
		// reloadButton: 'i[id="ab_live_tool_7_44-reload-button"]',

		coffeeShopAUButton: 'div[view_id="ab_live_item_14_30"] .webix_scroll_cont a[webix_l_id="13"]',
		userListAUButton: 'div[view_id="ab_live_item_14_30"] .webix_scroll_cont a[webix_l_id="15"]',
		addProductAUButton: 'div[view_id="ab_live_item_14_30"] .webix_scroll_cont a[webix_l_id="16"]',
		productListAUButton: 'div[view_id="ab_live_item_14_30"] .webix_scroll_cont a[webix_l_id="17"]',

		coffeeShopULButton: 'div[view_id="ab_live_item_15_32"] .webix_scroll_cont a[webix_l_id="13"]',
		addUserULButton: 'div[view_id="ab_live_item_15_32"] .webix_scroll_cont a[webix_l_id="14"]',
		userListULButton: 'div[view_id="ab_live_item_15_32"] .webix_scroll_cont a[webix_l_id="16"]',
		productListULButton: 'div[view_id="ab_live_item_15_32"] .webix_scroll_cont a[webix_l_id="17"]',

		coffeeShopAPButton: 'div[view_id="ab_live_item_16_34"] .webix_scroll_cont a[webix_l_id="13"]',
		addUserAPButton: 'div[view_id="ab_live_item_16_34"] .webix_scroll_cont a[webix_l_id="14"]',
		userListAPButton: 'div[view_id="ab_live_item_16_34"] .webix_scroll_cont a[webix_l_id="15"]',
		productListAPButton: 'div[view_id="ab_live_item_16_34"] .webix_scroll_cont a[webix_l_id="17"]',

		coffeeShopPLButton: 'div[view_id="ab_live_item_17_36"] .webix_scroll_cont a[webix_l_id="13"]',
		addUserPLButton: 'div[view_id="ab_live_item_17_36"] .webix_scroll_cont a[webix_l_id="14"]',
		userListPLButton: 'div[view_id="ab_live_item_17_36"] .webix_scroll_cont a[webix_l_id="15"]',
		addProductPLButton: 'div[view_id="ab_live_item_17_36"] .webix_scroll_cont a[webix_l_id="16"]',

		addUserForm: 'view_id="ab_live_item_14_31-columns"]',
		userEmailForm: 'div[view_id="ab_live_item_14_31-columns"] .webix_layout_line .webix_view:nth-of-type(1) .webix_el_box input',
		userFirstName: 'div[view_id="ab_live_item_14_31-columns"] .webix_layout_line .webix_view:nth-of-type(2) .webix_el_box input',
		userLastname: 'div[view_id="ab_live_item_14_31-columns"] .webix_layout_line .webix_view:nth-of-type(3) .webix_el_box input',
		userDateofBirth: 'div[view_id="ab_live_item_14_31-columns"] .webix_layout_line .webix_view:nth-of-type(4) .webix_el_box .webix_inp_static',
		userAddress: 'div[view_id="ab_live_item_14_31-columns"] .webix_layout_line .webix_view:nth-of-type(6) .webix_el_box textarea',
		userMale: 'div[view_id="ab_live_item_14_31-columns"] .webix_layout_line .webix_view:nth-of-type(7) .webix_el_box>div>a>button',
		userFemale: 'div[view_id="ab_live_item_14_31-columns"] .webix_layout_line .webix_view:nth-of-type(8) .webix_el_box>div>a>button',

		webixCalendar: 'div[view_id="$suggest16_calendar"]',
		webixTodayButton: 'div[view_id="$suggest16_calendar"] .webix_cal_footer .webix_cal_icons span:nth-of-type(1)',
		webixCalendarMonthName: 'div[view_id="$suggest16_calendar"] .webix_cal_month_name',
		webixCalendarPrevButton: 'div[view_id="$suggest16_calendar"] .webix_cal_prev_button',
		webixCalendarNextButton: 'div[view_id="$suggest16_calendar"] .webix_cal_next_button',
		webixCalendarJanButton: 'div[view_id="$suggest16_calendar"] .webix_cal_body div[data-value="0"]',
		webixCalendarDay1Button: 'div[view_id="$suggest16_calendar"] .webix_cal_body .webix_cal_row:nth-of-type(1) div[day="0"]',

		userDataList: 'div[view_id="ab_live_item_15_33"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll',
		userEmailList: 'div[column="1"] .webix_cell',
		userFirstNameList: 'div[column="2"] .webix_cell',
		userLastNameList: 'div[column="3"] .webix_cell',
		userDateofBirthList: 'div[column="4"] .webix_cell',
		userAgeOfBirthList : 'div[column="5"] .webix_cell',
		userAddressList: 'div[column="6"] .webix_cell',
		userMaleList: 'div[column="7"] .webix_cell',
		userFemaleList: 'div[column="8"] .webix_cell ',

		saveAddUserButton: 'div[view_id="ab-form-save-button-ab_live_item_14_31#"] .webix_el_box button',
		cancelAddUserButton: 'div[view_id="ab_live_item_14_31-form-cancel-button"] .webix_el_box button',

		updateRecordButton : 'div[view_id="ab_live_item_15_33-update-items-button"] .webix_img_btn',
		updateUserListButton : 'div[view_id="ab_live_item_15_33-update-items-button"] .webix_el_box .webixtype_form',
		updateUserEmail : 'div[view_id="ab-update-records-popup"] .webix_layout_line:nth-child(1) .webix_el_box input',
		updateUserFirstName : 'div[view_id="ab-update-records-popup"] .webix_layout_line:nth-child(2) .webix_el_box input',
		updateUserLastName : 'div[view_id="ab-update-records-popup"] .webix_layout_line:nth-child(3) .webix_el_box input',
		updateUserDateOfBirth : 'div[view_id="ab-update-records-popup"] .webix_layout_line:nth-child(4) .webix_el_box .fa-calendar',

		deleteUserRecordButton: 'div[view_id="ab_live_item_15_33-delete-items-button"] .webix_el_box .webix_img_btn',

		addProductForm: 'view_id="ab_live_item_16_35-columns"]',
		productName: 'div[view_id="ab_live_item_16_35-columns"] .webix_layout_line .webix_view:nth-of-type(1) .webix_el_box input',
		productPrice: 'div[view_id="ab_live_item_16_35-columns"] .webix_layout_line .webix_view:nth-of-type(2) .webix_el_box input',
		productStock: 'div[view_id="ab_live_item_16_35-columns"] .webix_layout_line .webix_view:nth-of-type(3) .webix_el_box input',
		productType: 'div[view_id="ab_live_item_16_35-columns"] .webix_layout_line .webix_view:nth-of-type(4) .webix_el_box .webix_inp_static',
		productTypePopup: 'div[view_id="$suggest16"] .webix_win_content .webix_win_body',

		saveAddProductButton: 'div[view_id="ab-form-save-button-ab_live_item_16_35#"] .webix_el_box button',
		cancelAddProductButton: 'div[view_id="ab_live_item_16_35-form-cancel-button"] .webix_el_box button',

		updateProductName: 'div[view_id="ab-update-records-popup"] .webix_layout_line:nth-child(1) .webix_el_box input',
		updateProductPrice: 'div[view_id="ab-update-records-popup"] .webix_layout_line:nth-child(2) .webix_el_box input',
		updateProductStock: 'div[view_id="ab-update-records-popup"] .webix_layout_line:nth-child(3) .webix_el_box input',
		updateProductTypeProduct: 'div[view_id="ab-update-records-popup"] .webix_layout_line:nth-child(4) .webix_el_box .webix_inp_static',

		updateRecordProductListButton: 'div[view_id="ab_live_item_17_37-update-items-button"] .webix_img_btn',

		productNameList: 'div[column="1"] .webix_cell',
		productPriceList: 'div[column="2"] .webix_cell',
		productStockList: 'div[column="3"] .webix_cell',
		productTypeList: 'div[column="4"] .webix_cell',

		deleteRecordProductListButton: 'div[view_id="ab_live_item_17_37-delete-items-button"] .webix_el_box .webix_img_btn',
		deleteRecordPopup: 'div[view_id="ab-delete-records-popup"]',
		deleteRecordButton: 'div[view_id="ab-delete-records-popup"] .webixtype_form',
		
		filterButton: 'div[view_id="ab_live_item_15_33-filter-button"] .webix_el_box .webix_img_btn',
		filterPopup: 'div[view_id="ab-filter-popup"]',
		applySortButton: 'div[view_id="ab_live_item_15_33-sort-button"]',

	},
	commands: [{
		clickCoffeeShopButton: function () {
			this.waitForElementVisible('@coffeeShopButton', 1200)
				.click('@coffeeShopButton')

			return this;
		},
		clickAddUserButton: function () {
			this.waitForElementVisible('@addUserButton', 5000)
				.click('@addUserButton')

			return this;
		},
		clickUserListButton: function () {
			this.waitForElementVisible('@userListButton', 5000)
				.click('@userListButton')

			return this;
		},
		clickAddProductButton: function () {
			this.waitForElementVisible('@addProductButton', 1200)
				.click('@addProductButton')

			return this;
		},
		clickProductListButton: function () {
			this.waitForElementVisible('@productListButton', 1200)
				.click('@productListButton')

			return this;
		},
		clickReloadButton: function () {
			this.waitForElementVisible('@reloadButton', 1200)
				.click('@reloadButton')

			return this;
		},
		clickSaveAddUserButton: function () {
			this.waitForElementVisible('@saveAddUserButton', 1200)
				.click('@saveAddUserButton')

			return this;
		},
		clickCancelAddUserButton: function () {
			this.waitForElementVisible('@cancelAddUserButton', 1200)
				.click('@cancelAddUserButton')

			return this;
		},
		clickCoffeeShopAUButton: function () {
			this.waitForElementVisible('@coffeeShopAUButton', 1200)
				.click('@coffeeShopAUButton')

			return this;
		},
		setUserEmail: function (userEmail) {
			this.waitForElementVisible('@userEmailForm', 5000)
				.clearValue('@userEmailForm')
				.setValue('@userEmailForm', userEmail);

			return this;
		},
		setUserFirstName: function (userFirstName) {
			this.waitForElementVisible('@userFirstName', 5000)
				.clearValue('@userFirstName')
				.setValue('@userFirstName', userFirstName);

			return this;
		},
		setUserDateofBirth: function () {
			this.waitForElementVisible('@userDateofBirth', 5000)
				.click('@userDateofBirth')
				.waitForElementVisible('@webixCalendar', 4000)
				.waitForElementVisible('@webixCalendarMonthName', 4000)
				.click('@webixCalendarMonthName')
				.waitForElementVisible('@webixCalendarPrevButton', 4000)
				.click('@webixCalendarPrevButton')
				.click('@webixCalendarPrevButton')
				.click('@webixCalendarPrevButton')
				.click('@webixCalendarPrevButton')
				.click('@webixCalendarPrevButton')
				.waitForElementVisible('@webixCalendarJanButton', 4000)
				.click('@webixCalendarJanButton')
				.waitForElementVisible('@webixCalendarDay1Button', 4000)
				.click('@webixCalendarDay1Button');

			return this;
		},
		setUserLastname: function (userLastname) {
			this.waitForElementVisible('@userLastname', 5000)
				.clearValue('@userLastname')
				.setValue('@userLastname', userLastname);

			return this;
		},
		setUserAddress: function (userAddress) {
			this.waitForElementVisible('@userAddress', 5000)
				.clearValue('@userAddress')
				.setValue('@userAddress', userAddress);

			return this;
		},
		setUserMale: function () {
			this.waitForElementVisible('@userMale', 5000)
				.click('@userMale');

			return this;
		},
		setUserFemale: function () {
			this.waitForElementVisible('@userFemale', 5000)
				.click('@userFemale');

			return this;
		},
		selectRowUserList : function (){
			this.waitForElementVisible('div[aria-colindex="1"] .webix_table_checkbox', 2000)
				.click('div[aria-colindex="1"] .webix_table_checkbox');

			return this;
		},
		selectUpdateRecord : function (){
			this.waitForElementVisible('@updateRecordButton', 4000)
				.click('@updateRecordButton');

			return this;	
		},
		setUpdateUserEmail : function (userEmail){
			this.waitForElementVisible('@updateUserEmail', 4000)
				.clearValue('@updateUserEmail')
				.setValue('@updateUserEmail', userEmail);

			return this;
		},
		setUpdateUserFirstName : function (userFirstName){
			this.waitForElementVisible('@updateUserFirstName', 4000)
				.clearValue('@updateUserFirstName')
				.setValue('@updateUserFirstName', userFirstName);

			return this;
		},
		setUpdateUserLastName : function (userLastname){
			this.waitForElementVisible('@updateUserLastName', 4000)
				.clearValue('@updateUserLastName')
				.setValue('@updateUserLastName', userLastname);

			return this;
		},
		setUpdateUserDateOfBirth : function (){
			this.waitForElementVisible('@updateUserDateOfBirth', 4000)
				.click('@updateUserDateOfBirth')
				.waitForElementVisible('.webix_cal_month .webix_cal_month_name', 10000)
				.click('.webix_cal_month .webix_cal_month_name')
				.waitForElementVisible('.webix_cal_month .webix_cal_month_name', 10000)
				.click('.webix_cal_month .webix_cal_month_name')
				.waitForElementVisible('.webix_cal_block:nth-child(1)', 10000)
				.click('.webix_cal_block:nth-child(1)')
				.waitForElementVisible('.webix_cal_block:nth-child(1)', 10000)
				.click('.webix_cal_block:nth-child(1)')
				.waitForElementVisible('div[day="5"] .webix_cal_day_inner', 3000)
				.click('div[day="5"]  .webix_cal_day_inner');

			return this;
		},
		setProductName : function (productName){

			this.waitForElementVisible('@productName', 4000)
				.clearValue('@productName')
				.setValue('@productName', productName);

			return this;
		},
		setProductPrice : function (productPrice){

			this.waitForElementVisible('@productPrice', 4000)
				.clearValue('@productPrice')
				.setValue('@productPrice', productPrice);

			return this;
		},
		setProductStock : function (productStock){

			this.waitForElementVisible('@productStock', 4000)
				.clearValue('@productStock')
				.setValue('@productStock', productStock);

			return this;
		},
		clickProductType : function () {

			this.waitForElementVisible('@productType', 4000)
				.click('@productType')
				.waitForElementVisible('@productTypePopup', 4000);

			return this;
		},
		setProductType : function (index) {

			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id="$suggest16_list"] .webix_scroll_cont .webix_list_item:nth-of-type(#index#)';

			itemSelector = itemSelector.replace('#index#', index || 1);

			self.waitForElementVisible(itemSelector, 4000)
				.click(itemSelector);

			return this;
		},
		clickSaveAddProductButton: function () {
			this.waitForElementVisible('@saveAddProductButton', 4000)
				.click('@saveAddProductButton')

			return this;
		},
		clickUpdateButton : function (){
			this.waitForElementVisible('div[view_id="ab-update-records-popup"] .webixtype_form', 4000)
				.click('div[view_id="ab-update-records-popup"] .webixtype_form');

			return this;
		},
		clickAddMoreFieldButton : function (){
			this.waitForElementVisible('div[view_id="ab-update-records-popup"] .webixtype_base:nth-child(1)', 4000)
				.click('div[view_id="ab-update-records-popup"] .webixtype_base:nth-child(1)');

			return this;
		},

		selectRowProductList : function (){
			this.waitForElementVisible('div[aria-rowindex="1"] .webix_table_checkbox', 5000)
				.click('div[aria-rowindex="1"] .webix_table_checkbox');

			return this;
		},
		setUpdateProductName : function (productName){

			this.waitForElementVisible('@updateProductName', 4000)
				.clearValue('@updateProductName')
				.setValue('@updateProductName', productName);

			return this;
		},
		setUpdateProductPrice : function (productPrice){

			this.waitForElementVisible('@updateProductPrice', 4000)
				.clearValue('@updateProductPrice')
				.setValue('@updateProductPrice', productPrice);

			return this;
		},
		setUpdateProductStock : function (productStock){

			this.waitForElementVisible('@updateProductStock', 4000)
				.clearValue('@updateProductStock')
				.setValue('@updateProductStock', productStock);

			return this;
		},
		setUpdateproductProductTypeProduct : function (productProductTypeProduct) {

			this.waitForElementVisible('@updateProductTypeProduct', 4000)
				.click('@updateProductTypeProduct');

			return this;
		},
		clickUpdateRecordProductListButton : function () {
			this.waitForElementVisible('@updateRecordProductListButton', 4000)
				.click('@updateRecordProductListButton');

			return this;
		},	
		selectDeleteUserRecord : function (index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[column="0"] .webix_cell:nth-of-type(#index#) .webix_table_checkbox';

			itemSelector = itemSelector.replace('#index#', index || 1);

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			return this;
		},
		clickDeleteUserRecordButton : function () {
			this
				.click('@deleteUserRecordButton')
				.waitForElementVisible('@deleteRecordPopup', 3000)
				.waitForElementVisible('@deleteRecordButton', 3000)
				.click('@deleteRecordButton');

			return this;
		},
		selectDeleteProductRecord : function (index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[column="0"] .webix_cell:nth-of-type(#index#) .webix_table_checkbox';

			itemSelector = itemSelector.replace('#index#', index || 1);

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			return this;
		},

		clickDeleteRecordProductListButton : function () {
			this
				.click('@deleteRecordProductListButton')
				.waitForElementVisible('@deleteRecordPopup', 3000)
				.waitForElementVisible('@deleteRecordButton', 3000)
				.click('@deleteRecordButton');

			return this;
		},
		clickFilterUserButton : function () {
			this
				.waitForElementVisible('@filterButton', 3000)
				.click('@filterButton')
				.waitForElementVisible('@filterPopup', 4000);

			return this;
		},
		setupDropdownFilter : function (index, combo_index) {

			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id="ab-filter-popup"] div[role="form"] .webix_scroll_cont .webix_layout_line:nth-of-type(#index#) .webix_el_combo:nth-of-type(#combo_index#) .webix_el_box';

			itemSelector = itemSelector.replace('#index#', index || 1);
			itemSelector = itemSelector.replace('#combo_index#', combo_index || 1);

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			return this;
		},
		setupFilterValue : function (index, value) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id="ab-filter-popup"] div[role="form"] .webix_scroll_cont .webix_layout_line:nth-of-type(#index#) .webix_el_text .webix_el_box input';

			itemSelector = itemSelector.replace('#index#', index || 1);

			self.waitForElementVisible(itemSelector, 10000)
				.setValue(itemSelector, value);

			return this;
		},
		clickDateCalendar : function (index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id="ab-filter-popup"] div[role="form"] .webix_scroll_cont .webix_layout_line:nth-of-type(#index#) .webix_el_datepicker .webix_el_box .webix_inp_static';

			itemSelector = itemSelector.replace('#index#', index || 1);

			self.waitForElementVisible(itemSelector, 10000)
				.click(itemSelector);

			return this;
		},
		setDateCalendarToGlobal : function(index) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = 'div[view_id="ab-filter-popup"] div[role="form"] .webix_scroll_cont .webix_layout_line:nth-of-type(#index#) .webix_el_datepicker .webix_el_box .webix_inp_static';

			itemSelector = itemSelector.replace('#index#', index || 1);

			self.waitForElementVisible(itemSelector, 10000)
				.getText(itemSelector, function(result) {
					global.calendarDate = result.value;
				});

			return this;

		},
		getDateFilterValue : function (index, popupsize) {
			var self = this,
				// deferred = Q.defer(),
				itemSelector = '.webix_popup:nth-of-type(#lastindex#)';

			itemSelector = '.webix_popup:nth-of-type(#lastindex#) .webix_win_content .webix_win_body .webix_calendar';
			itemSelector = itemSelector.replace('#lastindex#', popupsize || 1);

			//Hot Fix
			global.calendarSelector = "$suggest20_calendar";
			// console.log("Popup SIze:" + popupsize);
			// console.log(itemSelector);
			// self.getAttribute(itemSelector, 'view_id', function(result) {
			// 		// global.calendarSelector = result.value;
			// 		console.log(global.calendarSelector);
			// 	});

			return this;

		},
		setDateFilterValue : function (month) {
			var self = this;
			console.log(global.calendarSelector);

			var calendarToday = 'div[view_id="#calendar_selector#"] .webix_cal_footer .webix_cal_icons span:nth-of-type(1)';
			var calendarMonthName = 'div[view_id="#calendar_selector#"] .webix_cal_month_name';
			var calendarPrev = 'div[view_id="#calendar_selector#"] .webix_cal_prev_button';
			var calendarNext = 'div[view_id="#calendar_selector#"] .webix_cal_next_button';
			var calendarMonth = 'div[view_id="#calendar_selector#"] .webix_cal_body div[data-value="#month_number#"]';
			var calendarDay = 'div[view_id="#calendar_selector#"] .webix_cal_body .webix_cal_row:nth-of-type(1) div[day="0"]';

			calendarToday = calendarToday.replace('#calendar_selector#', global.calendarSelector || "");
			calendarMonthName = calendarMonthName.replace('#calendar_selector#', global.calendarSelector || "");
			calendarPrev = calendarPrev.replace('#calendar_selector#', global.calendarSelector || "");
			calendarNext = calendarNext.replace('#calendar_selector#', global.calendarSelector || "");
			calendarMonth = calendarMonth.replace('#calendar_selector#', global.calendarSelector || "");
			calendarDay = calendarDay.replace('#calendar_selector#', global.calendarSelector || "");

			console.log(calendarToday);

			if (month != null) {
				if (month >= 0 && month < 12) {
					calendarMonth = calendarMonth.replace('#month_number#', month || 0);
				} else {
					calendarMonth = calendarMonth.replace('#month_number#', 0);
				}
				self
					.click(calendarMonthName)
					.click(calendarPrev)
					.click(calendarPrev)
					.click(calendarMonth)
					.click(calendarDay);
			} else {
				self
					.click(calendarToday);
			}

			return this;

		},
		setupColumnFilter : function (index) {

			return this;
		},
		setupExpressionFilter : function (index) {

			return this;
		},
		setupInputFilter : function (index) {

			return this;
		},

		clickApplySortButton : function(){
			this
				.waitForElementVisible('@applySortButton', 5000)
				.click('@applySortButton');
				
			return this;
		},

		clickSelectFieldSortButton : function(){
			this
				.waitForElementVisible('.webix_win_content .webix_view .webix_layout_line', 5000);
				//.click('span[class="fa-angle-down"]');
				
			return this;
		},

		clickTabRedCardButton : function(){
			this
				.waitForElementVisible('.webix_item_tab:nth-of-type(3)', 5000)
				.click('.webix_item_tab:nth-of-type(3)');
		},

		clickFillterUserEmail : function(){
			this
				.waitForElementVisible('div[webix_l_id="UserEmail"]', 5000)
				.click('div[webix_l_id="UserEmail"]');
		},
		clickASCButton : function(){
			this
				.waitForElementVisible('button[button_id="asc"]', 5000)
				.click('button[button_id="asc"]');
		},
		clickDESCButton : function(){
			this
				.waitForElementVisible('button[button_id="desc"]', 5000)
				.click('button[button_id="desc"]');
		},
		getWebixUserDataValue: function (index, column) {
			var self = this,
			itemSelector = 'div[column="#column#"] .webix_cell:nth-of-type(#index#)';
			itemSelector = itemSelector.replace('#index#', index || 1);
			itemSelector = itemSelector.replace('#column#', column || 1);

			if (column == 7 || column == 8 ) {
				itemSelector += " .ab-boolean-display .webix_icon";
				self.getAttribute(itemSelector, 'class', function(result) {
					console.log(result.value);
					if (result.value.indexOf('fa-check-square-o') !== -1) {
						global.userDataArray.push(true);
					} else {
						global.userDataArray.push(false);
					};
					
				})
			} else {
				self.getText(itemSelector, function (result) {
					console.log(result.value);
					global.userDataArray.push(result.value);
				});
			}
			return this;
		},
		getWebixUserData2Value: function (index, column) {
			var self = this,
			itemSelector = 'div[column="#column#"] .webix_cell:nth-of-type(#index#)';
			itemSelector = itemSelector.replace('#index#', index || 1);
			itemSelector = itemSelector.replace('#column#', column || 1);

			self.getText(itemSelector, function (result) {
				console.log(result.value);
				global.userDataArray2.push(result.value);
			});
			return this;
		},
		clickFillterUserFirstname : function(){
			this
				.waitForElementVisible('div[webix_l_id="UserFirstname"]', 5000)
				.click('div[webix_l_id="UserFirstname"]');
		},
		clickFillterUserLastname : function(){
			this
				.waitForElementVisible('div[webix_l_id="UserLastname"]', 5000)
				.click('div[webix_l_id="UserLastname"]');
		},
		clickFillterDateofBirth : function(){
			this
				.waitForElementVisible('div[webix_l_id="DateofBirth"]', 5000)
				.click('div[webix_l_id="DateofBirth"]');
		},
	}]
};
