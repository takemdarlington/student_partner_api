"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller(facade) {
    _classCallCheck(this, Controller);

    this.facade = facade;
  }

  _createClass(Controller, [{
    key: "create",
    value: function create(req, res, next) {
      // console.log(req.body)
      this.facade.create(req.body).then(function (doc) {
        return res.status(201).json(doc);
      })["catch"](function (err) {
        res.status(400).json(err);
        next(err);
      });
    }
  }, {
    key: "find",
    value: function find(req, res, next) {
      return this.facade.find(req.query).then(function (collection) {
        return res.status(200).json(collection);
      })["catch"](function (err) {
        return next(err);
      });
    }
  }, {
    key: "findOne",
    value: function findOne(req, res, next) {
      return this.facade.findOne(req.query).then(function (doc) {
        return res.status(200).json(doc);
      })["catch"](function (err) {
        return next(err);
      });
    }
  }, {
    key: "findById",
    value: function findById(req, res, next) {
      return this.facade.findById(req.params.id).then(function (doc) {
        if (!doc) {
          return res.sendStatus(404);
        }

        return res.status(200).json(doc);
      })["catch"](function (err) {
        return next(err);
      });
    }
  }, {
    key: "update",
    value: function update(req, res, next) {
      this.facade.update({
        _id: req.params.id
      }, req.body).then(function (results) {
        if (results.n < 1) {
          return res.sendStatus(404);
        }

        if (results.nModified < 1) {
          return res.sendStatus(304);
        }

        res.sendStatus(204);
      })["catch"](function (err) {
        return next(err);
      });
    }
  }, {
    key: "remove",
    value: function remove(req, res, next) {
      this.facade.remove({
        _id: req.params.id
      }).then(function (doc) {
        if (!doc) {
          return res.sendStatus(404);
        }

        return res.sendStatus(204);
      })["catch"](function (err) {
        return next(err);
      });
    }
  }]);

  return Controller;
}(); // module.exports = Controller


var _default = Controller;
exports["default"] = _default;