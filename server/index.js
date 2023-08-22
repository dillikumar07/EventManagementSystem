const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Usermodel = require('./models/Users');
const Eventsmodel =require('./models/Events');
const AppEventsmodel = require('./models/AppEvents');
const multer = require('multer')
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/EMS');


const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'public/Images')
    },
    filename : (req,file,cb) =>{
        cb(null,file.fieldname + "_" + Date.now() +path.extname(file.originalname))
    }
})

const upload = multer({
    storage :storage
}).single('image');

app.post('/login', (req,res) => {
    const {email, password} =req.body;
    Usermodel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password=password){
                res.json("Login Success");
            } else {
                res.json("Password Incorrect");
            }
        }
    })
})

app.post('/register', (req,res) =>{
    Usermodel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
}) 



app.post('/createvent',upload,(req,res) =>{
    event_name = req.body.event_name,
    category = req.body.category,
    event_date = req.body.event_date,
    event_date1 = req.body.event_date1,
    event_time = req.body.event_time,
    venue = req.body.venue,
    image = req.file.filename,
    description = req.body.description,

    Eventsmodel.create({
        event_name,
        category,
        event_date,
        event_date1,
        event_time,
        venue,
        image,
        description,
    })
    .then(event => res.json(event))
    .catch(err => res.json(err))
})

app.get('/getEvents', (req,res)=>{
    Eventsmodel.find()
    .then(event => res.json(event))
    .catch(err => res.json(err))
})

app.get('/getEventsbyid', (req,res)=>{
    const id = req.params.id;
    Eventsmodel.findById({_id:id})
    .then(event => res.json(event))
    .catch(err => res.json(err))
})

app.post('/approveEvents/:id', (req,res) => {
    const id = req.params.id;
   AppEventsmodel.create(Eventsmodel.find({_id:id}))
   .then(res => res.json(res))
   .catch(err => res.json(err))
})

app.delete('/deleteEvent/:id', (req,res)=>{
    const id = req.params.id;
    Eventsmodel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
/*
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    Eventsmodel.findByIdAndDelete(id)
      .then(deletedEvent => {
        if (deletedEvent) {
          res.json(deletedEvent);
        } else {
          res.status(404).json({ message: 'Event not found' });
        }
      })
      .catch(err => res.status(500).json(err));
  });*/

app.listen(3000, () => {
    console.log("Server Listening");
})

