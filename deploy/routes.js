"use strict";

var _router = _interopRequireDefault(require("./model/user/router"));

var _router2 = _interopRequireDefault(require("./model/category/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
NOTE:
Use only CommonJS syntax on this file

*/
var Router = require('express').Router;

var router = new Router(); // NOTE: This is for deployment. Keep using the CommonJs syntax and not babel
// const user = require('./build/user/router');
// const category = require('./build/category/router');
// import user from './build/user/router';
// import category from './build/category/router';
// NOTE: Change routes to deploy

router.route('/').get(function (req, res) {
  res.json({
    message: 'Welcome to student-partner API!'
  });
});
router.use('/user', _router["default"]);
router.use('/category', _router2["default"]);
module.exports = router;
