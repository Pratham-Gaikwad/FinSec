const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const UserModel = require('./models/user');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://root:root@doctordatabase.kyopg41.mongodb.net/?retryWrites=true&w=majority&appName=DoctorDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3001, () => {
  console.log("listening")
});

app.post('/register',  (req, res) => {
  const user = new UserModel(req.body);
  user.save()
   .then(user => res.json(user))
   .catch(err => console.log(err));    
});

app.post('/login', (req, res) => {
  UserModel.findOne({email: req.body.email})
   .then(user => {
      if(user){
        if(user.password === req.body.password){
          res.json({message:"success", user:user.name});
        }
        else{
          res.json("Wrong Password")
        }
      }
    })
   .catch(err => res.json("No user found"));
});