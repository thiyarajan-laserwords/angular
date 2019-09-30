import express from 'express';
import bodyParser from 'body-parser';
import db from 'diskdb';

import { UserController } from './app/controller/UserController';


const app = express();
const PORT = 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//db setup
db.connect( '../db');
db.loadCollections(['users']);

//apis
app.post('/login', UserController.login);
app.post('/register', UserController.registerUser);

//server starting...
app.listen(PORT, ()=>{
    console.log('server started '+PORT);
})