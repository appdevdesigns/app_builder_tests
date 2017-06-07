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
		typeProduct: 'div[view_id="ab_live_item_16_35-columns"] .webix_layout_line .webix_view:nth-of-type(4) .webix_el_box .webix_inp_static',

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

		deleteRecordProductListButton: 'div[view_id="ab_live_item_17_37-delete-items-button"] .webix_el_box .webix_img_btn',
		deleteRecordPopup: 'div[view_id="ab-delete-records-popup"]',
		deleteRecordButton: 'div[view_id="ab-delete-records-popup"] .webixtype_form',

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
				.waitForElementVisible('@webixCalendar', 5000)
				.click('@webixTodayButton');

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
		setTypeProduct : function (typeProduct) {

			this.waitForElementVisible('@updateProductTypeProduct', 4000)
				.click('@updateProductTypeProduct');

			return this;
		},
		clickSaveAddProductButton: function () {
			this.waitForElementVisible('@saveAddProductButton', 2000)
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
		selectDeleteUserRecord : function () {
			this.waitForElementVisible('div[aria-colindex="1"] .webix_table_checkbox', 5000)
				.click('div[aria-colindex="1"] .webix_table_checkbox');

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
		selectDeleteProductRecord : function () {
			this.waitForElementVisible('div[aria-colindex="1"] .webix_table_checkbox', 5000)
				.click('div[aria-colindex="1"] .webix_table_checkbox');

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

		clickApplySortButton : function(){
			this
				.waitForElementVisible('@applySortButton', 3000)
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
				.waitForElementVisible('.webix_item_tab:nth-of-type(3)',5000)
				.click('.webix_item_tab:nth-of-type(3)');
		}

	}]
};
