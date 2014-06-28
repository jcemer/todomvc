var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
	props: {
		id: ['number'],
		title: ['string', true, ''],
		completed: ['boolean', true, false]
	}
});
