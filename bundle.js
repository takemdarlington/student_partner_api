const controller = require('./controller');
const Router$1 = require('express').Router;
const router$1 = new Router$1();

router$1.route('/')
  .get((...args) => controller.find(...args))
  .post((...args) => controller.create(...args));

router$1.route('/:id')
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args));

const Router = require('express').Router;
const router = new Router();

const user = require('./model/user/router');
const pet = require('./model/pet/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to student-partner API!' });
});

router.use('/user', user);
router.use('/pet', pet);
router.use('/faculty', router$1);

const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const bluebird = require('bluebird');

const config = require('./config');
const app = express();

mongoose.Promise = bluebird;
mongoose.connect(config.mongo.url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json())
app.use(morgan('tiny'));

app.use('/', router);

app.listen(config.server.port, () => {
  console.log(`Magic happens on port ${config.server.port}`);
});

module.exports = app;
