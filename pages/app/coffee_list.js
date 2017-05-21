module.exports = {
	url: 'http://localhost:1337/page/opsportal',
	elements: {
		coffeeShopButton: 'div[view_id="ab_live_item_15_37"] .webix_scroll_cont a[webix_l_id="15"]',
		addUserButton: 'div[view_id="ab_live_item_15_37"] .webix_scroll_cont a[webix_l_id="16"]',
		userListButton: 'div[view_id="ab_live_item_15_37"] .webix_scroll_cont a[webix_l_id="17"]',
		addProductButton: 'div[view_id="ab_live_item_15_37"] .webix_scroll_cont a[webix_l_id="18"]',
		productListButton: 'div[view_id="ab_live_item_15_37"] .webix_scroll_cont a[webix_l_id="19"]',
		reloadButton: 'i[id="ab_live_tool_4_15-reload-button"]',

		addUserForm: 'view_id="ab_live_item_16_39-columns"]',
		userEmailForm: 'div[view_id="ab_live_item_16_39-columns"] .webix_layout_line .webix_view:nth-of-type(1) .webix_el_box input',
		userFirstName: 'div[view_id="ab_live_item_16_39-columns"] .webix_layout_line .webix_view:nth-of-type(2) .webix_el_box input',
		userDateofBirth: 'div[view_id="ab_live_item_16_39-columns"] .webix_layout_line .webix_view:nth-of-type(3) .webix_el_box .webix_inp_static',
		userLastname: 'div[view_id="ab_live_item_16_39-columns"] .webix_layout_line .webix_view:nth-of-type(4) .webix_el_box input',
		userAddress: 'div[view_id="ab_live_item_16_39-columns"] .webix_layout_line .webix_view:nth-of-type(6) .webix_el_box textarea',
		userMale: 'div[view_id="ab_live_item_16_39-columns"] .webix_layout_line .webix_view:nth-of-type(7) .webix_el_box>div>a>button',
		userFemale: 'div[view_id="ab_live_item_16_39-columns"] .webix_layout_line .webix_view:nth-of-type(8) .webix_el_box>div>a>button',

		webixCalendar: 'div[view_id="$suggest16_calendar"]',
		webixTodayButton: 'div[view_id="$suggest16_calendar"] .webix_cal_footer .webix_cal_icons span:nth-of-type(1)',

		userDataList: 'div[view_id="ab_live_item_17_41"] .webix_ss_body .webix_ss_center .webix_ss_center_scroll',
		userEmailList: 'div[column="1"] .webix_cell',
		userFirstNameList: 'div[column="2"] .webix_cell',
		userLastNameList: 'div[column="3"] .webix_cell',
		userDateofBirthList: 'div[column="4"] .webix_cell',
		userAddressList: 'div[column="6"] .webix_cell',
		userMaleList: 'div[column="7"] .webix_cell',
		userFemaleList: 'div[column="8"] .webix_cell ',

		saveAddUserButton: 'div[view_id="ab-form-save-button-ab_live_item_16_39#"] .webix_el_box button',
		cancelAddUserButton: 'div[view_id="ab_live_item_16_39-form-cancel-button"] .webix_el_box button',

	},
	commands: [{
		clickCoffeeShopButton: function () {
			this.waitForElementVisible('@coffeeShopButton', 1200)
				.click('@coffeeShopButton')

			return this;
		},
		clickAddUserButton: function () {
			this.waitForElementVisible('@addUserButton', 1200)
				.click('@addUserButton')

			return this;
		},
		clickUserListButton: function () {
			this.waitForElementVisible('@userListButton', 1200)
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
		}
	}]
};
