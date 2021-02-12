const mongoose = require("./initdb").mongoose;

const usersSchema = new mongoose.Schema({
    firstname:String,
    middlename:String,
    lastname:String,
  name: {
    type: Object,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone:Number,
  address:String,
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  token: {
    type: String,
  },
  role: {
    type: Number,
    default: 2,
  },
});
