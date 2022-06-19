const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
});

const ModelUser = mongoose.model('users', userSchema);

module.exports = ModelUser;
