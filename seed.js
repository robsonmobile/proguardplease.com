var seeder = require('mongoose-seed');
const dotenv = require('dotenv');
dotenv.load({ path: '.env.example' });
const data = require('./seed.json')
 
seeder.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, function() {
    seeder.loadModels([
        'models/Rule.js'
    ]);
 
    // Clear specified collections 
    seeder.clearModels(['Rule'], function() {
        // Callback to populate DB once collections have been cleared 
        seeder.populateModels(data, function() {
            seeder.disconnect(); 
        });
 
    });
});