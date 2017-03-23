module.exports = {
	url: 'http://localhost:1337/site/login',
	elements: {
		username: 'input[id="user-name"]',
		password: 'input[id="user-pw"]',
		submitButton: 'button[type="submit"]',
	},
	commands: [{
		passLogin: function () {
			this.setValue('@username', 'admin')
				.setValue('@password', 'admin')
				.click('@submitButton');

			return this;
		}
	}]
};