import User  from '../model/user';
import db from "diskdb";

export class UserController {

    constructor(){

    }
    //to register new users
    static create(req, res){
        let userData = req.body;
        if(userData){
            const user = new User(userData);
            const err = user.validateSync();
            if(err){
                return res.status(500).send({status: 500, message: err.message});
            }else{
                db.users.save(user);
                return res.status(201).send({status:201, message: 'user added successfully'});
            }
        }
    }

    //login functionality
    static login(req, res){
        if(req.body){
            let userData = db.users.find({username: req.body.username, password: req.body.password})
            if(userData.length > 0){
                res.status(201).send({message: 'login success'});
            }
            if(userData.length === 0){
                res.status(404).send({message: 'No data found'});
            }
        }
    }

}
