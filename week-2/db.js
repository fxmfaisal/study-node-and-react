const mongoose = require('mongoose');
require("dotenv/config");

const MongooseClient = { 
  connect: () => {
    mongoose.connect(process.env.DB_CONNECTION, {}, () => {
      console.log('Connected to the DB.');
    }, (err) => {
      console.log('Unable to initialize Mongoose: ' + err);
    });
  },
  close: () => {
    mongoose.disconnect();
  }
};

module.exports = MongooseClient;
