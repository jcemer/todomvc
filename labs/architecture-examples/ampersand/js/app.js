var MainView = require('./views/main');
var Todos = require('./models/todo-collection');

module.exports = {
	// this is the the whole app initter
	blastoff: function () {
		var todos = new Todos();

		var mainView = new MainView({
			el: document.getElementById('todoapp'),
			collection: todos
		});

		mainView.render();
	}
};

// run it
module.exports.blastoff();
