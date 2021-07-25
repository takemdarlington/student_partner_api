"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var facultySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String
  }
});
module.exports = facultySchema;