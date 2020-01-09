const Facade = require('../../lib/facade')
const facultySchema = require('./schema')

class FacultyFacade extends Facade {}

module.exports = new FacultyFacade('Faculty', facultySchema)
