var Seeder = require('mongoose-data-seed').Seeder;
var Rules = require('../models/Rule');
var data = require('./rules.json');

var RulesSeeder = Seeder.extend({
	shouldRun: function() {
		return Rules.count().exec().then(count => count === 0);
	},
	run: function() {
		return Rules.create(data);
	}
});

module.exports = RulesSeeder;