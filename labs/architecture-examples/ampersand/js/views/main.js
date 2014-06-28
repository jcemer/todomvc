var View = require('ampersand-view');
var TodoForm = require('./../forms/todo');
var Todo = require('./../models/todo');

// The Application
// ---------------

module.exports = View.extend({

	events: {
		'keypress #new-todo': 'createOnEnter',
		'click #clear-completed': 'clearCompleted',
		'click #toggle-all': 'toggleAllComplete'
	},

	initialize: function () {

		this.form = new TodoForm({
			el: this.get('#new-todo'),
			model: new Todo()
		})

		this.registerSubview(this.form);

		console.log(this.collection);
	},

	render: function () {

	}
});
