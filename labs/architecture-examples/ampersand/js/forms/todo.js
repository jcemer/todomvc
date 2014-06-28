var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');

module.exports = FormView.extend({
	fields: function () {
		return [
			new InputView({
				label: 'Title',
				name: 'title',
				value: this.model && this.model.title,
				placeholder: 'What needs to be done?',
				parent: this
			})
		];
	}
});
