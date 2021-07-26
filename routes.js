const Router = require('express').Router
const router = new Router()

// NOTE: This is for deployment

// import user from './build/user/router';
// import faculty from './build/faculty/router';

// NOTE: Change routes to deploy
// const user = require('./model/user/router')

import user from './model/user/router';
import category from './model/category/router'

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to student-partner API!' })
})

router.use('/user', user)
router.use('/category', category)

module.exports = router
