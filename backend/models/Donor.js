const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  age: Number,
  contact: String,
  location: String,
}, { timestamps: true });

module.exports = mongoose.model('Donor', donorSchema);
