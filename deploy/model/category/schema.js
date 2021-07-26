"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  tag: String,
  image: String,
  parent: _mongoose["default"].ObjectId,
  dateCreated: {
    type: Date,
    "default": Date.now
  },
  dateUpdated: {
    type: Date,
    "default": Date.now
  }
});
var _default = CategorySchema;
exports["default"] = _default;