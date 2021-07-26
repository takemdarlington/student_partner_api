// const Facade = require('../../lib/facade')
// const facultySchema = require('./schema')

import Facade from '../../lib/facade';
import facultySchema from './schema';

class FacultyFacade extends Facade { }

const facultyFacade = new FacultyFacade('Faculty', facultySchema);

export default facultyFacade;