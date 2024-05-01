const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const UserModel = require('./models/user');
const CustomerModel = require('./models/customer');
const PaymentModel = require('./models/payment');

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

// reg/log
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

// ML API for Loan
app.post('/customer-reg', async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: "Name required" });
  }
  try {
    const existingCustomer = await CustomerModel.findOne({ name: req.body.name });
    if (existingCustomer) {
      return res.status(409).json({ message: "Customer already exists" });
    }
    const customer = new CustomerModel(req.body);
    await customer.save();
    res.status(201).json({ message: "Customer created successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});


app.post('/customer', async (req, res) => {
  try {
    const Cust = await CustomerModel.findOne({ name: req.body.name });
    if (Cust) {
      res.json(Cust);
    } else {
      res.status(404).json("Customer not found" );
    }
  } catch (error) {
    res.json("Internal Server Error");
  }
});
// ML API for CreditCard

app.post('/payment', async (req, res) => {
  try {
    const payment = new PaymentModel(req.body);
    await payment.save();
    res.status(201).json({ message: "Payment created successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});     