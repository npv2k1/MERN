const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
var moment = require("moment");

const { getISODate } = require("./../../utils/convert");

require("dotenv").config();
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const Transactions = require("../../model/transactionSchema");

router.post("/add",(req,res)=>{
    Transactions.create({...req.body}).then(msg=>{
        res.send(msg)
    })
})

module.exports = router;
