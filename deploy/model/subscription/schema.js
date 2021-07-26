"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var facultySchema = new Schema({
  expiry_date: {
    type: Date
  },
  number_of_allowed_users: {
    type: Number
  },
  number_of_logged_in_users: {
    type: Number
  },
  category_id: _mongoose["default"].ObjectId,
  subscriber_id: _mongoose["default"].ObjectId,
  status: String,
  dateCreated: {
    type: Date,
    "default": Date.now
  },
  dateUpdated: {
    type: Date,
    "default": Date.now
  }
});
var _default = facultySchema;
exports["default"] = _default;