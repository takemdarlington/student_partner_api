"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const controller = require('./controller')
var Router = require('express').Router;

var router = new Router();
router.route('/').get(function () {
  return _controller["default"].find.apply(_controller["default"], arguments);
}).post(function () {
  return _controller["default"].create.apply(_controller["default"], arguments);
});
router.route('/:id').put(function () {
  return _controller["default"].update.apply(_controller["default"], arguments);
}).get(function () {
  return _controller["default"].findById.apply(_controller["default"], arguments);
})["delete"](function () {
  return _controller["default"].remove.apply(_controller["default"], arguments);
});
router.route('/:id/faculty').post(function () {
  return _controller["default"].update.apply(_controller["default"], arguments);
});
var _default = router; // module.exports = router

exports["default"] = _default;