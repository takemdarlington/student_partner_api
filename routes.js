const Router = require('express').Router
const router = new Router()

// NOTE: This is for deployment
// const user = require('./build/user/router')
// const pet = require('./build/pet/router')
// const faculty = require('./build/faculty/router')

// NOTE: Change routes to deploy
// const user = require('./model/user/router')

import user from './model/user/router';
import faculty from './model/faculty/router';
// const pet = require('./model/pet/router')
// const faculty = require('./model/faculty/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to student-partner API!' })
})

router.use('/user', user)
// router.use('/pet', pet)
router.use('/faculty', faculty)

module.exports = router
