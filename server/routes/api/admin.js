const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
var moment = require("moment");

const {getISODate }= require('./../../utils/convert')

require("dotenv").config();
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../model/User");

// TODO Check admin

// get users list
router.get('/listusers',(req,res)=>{
    User.find({},{password:0}).then(data=>{
        res.send(data)
    })
})

router.post('/create', (req,res)=>{
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const{name,birthday,gender,email,phone,address,password,role} = req.body
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: name,
        birthday:moment(birthday).format('DD/MM/YYYY'),
        gender:gender,
        email:email,
        phone:phone,
        address:address,
        password:password,
        role:role
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
})

module.exports = router;
