/*
NOTE:
Use only CommonJS syntax on this file

*/

const Router = require('express').Router
const router = new Router()

// NOTE: This is for deployment. Keep using the CommonJs syntax and not babel

// const user = require('./build/user/router');
// const category = require('./build/category/router');

// import user from './build/user/router';
// import category from './build/category/router';


// NOTE: Change routes to deploy

import user from './model/user/router';
import category from './model/category/router';

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to student-partner API!' })
})

router.use('/user', user)
router.use('/category', category)

module.exports = router
