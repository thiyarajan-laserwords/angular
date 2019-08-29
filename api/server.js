import express from 'express';
import bodyParser from 'body-parser';
import db from 'diskdb';

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

//db connection

db.connect( '../db');
db.loadCollections(['users']);

//apis
app.post('/login', (req, res) =>{
   if(req.body){
       let userData = db.users.find({username: req.body.username, password: req.body.password})
       if(userData.length > 0){
           res.status(201).send({message: 'login success'});
       }
       if(userData.length === 0){
           res.status(404).send({message: 'No data found'});
       }
   }
});

app.post('/register', (req, res) =>{
    let userData = req.body;
    if(userData){
        db.users.save(userData);
        res.status(201).send({message: 'user added successfully'});
    }
    res.status(400).send({ message: 'Incorrect username and password' });
});

//server starting...
app.listen(PORT, ()=>{
    console.log('server started '+PORT);
})
