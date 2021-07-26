// const Controller = require('../../lib/controller')

import Controller from '../../lib/controller';
import facultyFacade from '../faculty/facade';


import userFacade from './facade';
// const userFacade = require('./facade')

class UserController extends Controller {
    async update(req, res, next) {
        console.log(req.params);
        console.log(req.body.faculty_id)

        let new_user = null;
        await userFacade.findById(req.params.id)
            .then(doc => {

                console.log(doc);
                new_user = doc;
            })

        await facultyFacade.findById(req.body.faculty_id)
            .then(doc => {
                // userFacade.setFaculty(doc);

                doc.title = "cot";
                doc.save();

                new_user.faculty = doc;
                new_user.save();
                // console.log(doc);
                // next();
            })
            .catch(err => next(err))
        res.status(200).json(req.body)
    }
}

const UserCon = new UserController(userFacade);
export default UserCon;
