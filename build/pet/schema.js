"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var petSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String
  }
});
module.exports = petSchema;