const Router = require('express').Router
const router = new Router()

const user = require('./model/user/router')
const pet = require('./model/pet/router')
const faculty = require('./model/faculty/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to student-partner API!' })
})

router.use('/user', user)
router.use('/pet', pet)
router.use('/faculty', faculty)

module.exports = router
