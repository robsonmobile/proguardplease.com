const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema({
	library: String,
	version: String,
	rules: String,
	aliasName: String
}, {
	timestamps: true
});

const Rule = mongoose.model('Rule', ruleSchema);

module.exports = Rule;