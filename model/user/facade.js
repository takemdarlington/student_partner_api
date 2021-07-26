// const Facade = require('../../lib/facade')

import Facade from '../../lib/facade';
// const userSchema = require('./schema')

import userSchema from './schema';

class UserFacade extends Facade {
}

// module.exports = new UserFacade('User', userSchema)
// let User = new UserFacade('User', userSchema);
export default new UserFacade('User', userSchema);
