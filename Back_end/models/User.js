const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  batch: { type: String, required: true },
  password: { type: String, required: true },
  passed: { type: Boolean, required: true },
});

module.exports = mongoose.model('User', UserSchema);
