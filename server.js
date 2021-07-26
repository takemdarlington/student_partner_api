"use strict";

var _routesProd = _interopRequireDefault(require("./routes-prod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var mongoose = require('mongoose');

var helmet = require('helmet');

var bodyParser = require('body-parser');

var morgan = require('morgan');

var bluebird = require('bluebird');

var config = require('./config'); //const routes = require('./routes')


var app = express();
mongoose.Promise = bluebird;
mongoose.connect(config.mongo.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(helmet());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); // app.use(express.json())

app.use(morgan('tiny'));
app.use('/', _routesProd["default"]);
app.listen(config.server.port, function () {
  console.log("Magic happens on port ".concat(config.server.port));
});
module.exports = app;
