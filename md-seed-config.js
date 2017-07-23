var mongooseLib = require('mongoose');
var Rules = require('./seeders/rules.seeder');

mongooseLib.Promise = global.Promise || Promise;

module.exports = {

  // Export the mongoose lib
  mongoose: mongooseLib,

  // Export the mongodb url
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/proguardplease',

  /*
    Seeders List
    ------
    order is important
  */
  seedersList: {
  	Rules
  }
};
