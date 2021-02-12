const mongoose = require("./initdb").mongoose;

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  birthday:{
    type: Date,
  },
  gender:{
    type:Boolean,
    default: true
  },
  email: {
    type: String,
    required: true
  },
  phone:{
    type:Number,
  },
  address:{
    type:String,
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  token:{
    type:String
  },
  role:{
    type:Number,
    default: 2,
  }
});
// tạo model
const Users = mongoose.model("users", usersSchema);


module.exports = Users
