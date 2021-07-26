"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var facultySchema = new Schema({
  status: String,
  dateCreated: {
    type: Date,
    "default": Date.now
  },
  dateUpdated: {
    type: Date,
    "default": Date.now
  },
  question_paper_tutor_id: _mongoose["default"].ObjectId,
  solution_paper_tutor_id: _mongoose["default"].ObjectId,
  question_paper_link: String,
  solution_paper_link: String,
  type: String,
  category_id: _mongoose["default"].ObjectId,
  year: Number,
  image: String
});
var _default = facultySchema;
exports["default"] = _default;