// const Controller = require('../../lib/controller')
//const facultyFacade = require('./facade')
import facultyFacade from './facade'
import Controller from '../../lib/controller';

class FacultyController extends Controller {
    // super(facultyFacade) {
    //     // this.facade = facultyFacade
    // }

    //you can override all methods inherited from the base Controller class
    create(req, res, next) {
        console.log(req.body)
        this.facade.create(req.body)
            .then(doc => res.status(201).json(doc))
            .catch(err => { res.status(400).json(err); next(err) })
    }



}

const FacCon = new FacultyController(facultyFacade);

export default FacCon;


