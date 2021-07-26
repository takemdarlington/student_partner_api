
import CategoryFacade from './facade'
import Controller from '../../lib/controller';

class FacultyController extends Controller {

    create(req, res, next) {
        console.log(req.body)
        this.facade.create(req.body)
            .then(doc => res.status(201).json(doc))
            .catch(err => { res.status(400).json(err); next(err) })
    }

}

export default new FacultyController(CategoryFacade);


