"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Facade = /*#__PURE__*/function () {
  function Facade(name, schema) {
    _classCallCheck(this, Facade);

    this.Model = _mongoose["default"].model(name, schema);
  }

  _createClass(Facade, [{
    key: "create",
    value: function create(body) {
      var model = new this.Model(body);
      return model.save();
    }
  }, {
    key: "find",
    value: function find() {
      var _this$Model;

      return (_this$Model = this.Model).find.apply(_this$Model, arguments).exec();
    }
  }, {
    key: "findOne",
    value: function findOne() {
      var _this$Model2;

      return (_this$Model2 = this.Model).findOne.apply(_this$Model2, arguments).exec();
    }
  }, {
    key: "findById",
    value: function findById() {
      var _this$Model3;

      return (_this$Model3 = this.Model).findById.apply(_this$Model3, arguments).exec();
    }
  }, {
    key: "update",
    value: function update() {
      var _this$Model4;

      return (_this$Model4 = this.Model).update.apply(_this$Model4, arguments).exec();
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this$Model5;

      return (_this$Model5 = this.Model).remove.apply(_this$Model5, arguments).exec();
    }
  }]);

  return Facade;
}(); // module.exports = Facade


var _default = Facade;
exports["default"] = _default;