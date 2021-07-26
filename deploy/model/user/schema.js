"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  token: String,
  status: String,
  role: String,
  image: String,
  referer: _mongoose["default"].ObjectId,
  tag: String,
  dateCreated: {
    type: Date,
    "default": Date.now
  },
  dateUpdated: {
    type: Date,
    "default": Date.now
  }
});
module.exports = userSchema;