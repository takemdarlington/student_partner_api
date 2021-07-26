// const controller = require('./controller')
import UserCon from './controller';
const Router = require('express').Router
const router = new Router()

router.route('/')
  .get((...args) => UserCon.find(...args))
  .post((...args) => UserCon.create(...args))

router.route('/:id')
  .put((...args) => UserCon.update(...args))
  .get((...args) => UserCon.findById(...args))
  .delete((...args) => UserCon.remove(...args))

router.route('/:id/faculty')
  .post((...args) => UserCon.update(...args))

export default router;
// module.exports = router
