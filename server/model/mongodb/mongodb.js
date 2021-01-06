/**
 * !B1
 * TODO "npm i mongoose"
 * */
const mongoose = require("mongoose");
/**
 * !B2
 * TODO Khởi tạo file database (Kết nối database)
 */
mongoose.connect("mongodb://localhost/myDatabase");

/**
 * !B3
 * TODO Create table sqlite
 */
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
// tạo model
const user = mongoose.model("user", userSchema);

/**
 * !B4
 * TODO CRUD (create, read, update, delete)
 */
function Create(name, age) {
  return new Promise((resolve, reject) => {
    user.create({
      name: name,
      age: age,
    });
  });
}
function Read() {
  user.find().exec((err, users) => {
    console.log(users);
  });
}

function Update() {
  return new Promise((resolve, reject) => {
    user.update(
      { name: "linh" },
      { name: "linh", age: 100 },
      function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(console.log("Result :", result));
        }
      }
    );
  });
}

function Delete() {
  return new Promise((resolve,reject)=>{
    user.deleteOne({ name: "nguyên" },(err,res)=>{
      if (err){
        reject(console.error(err))
      }
      resolve(console.log(res))
    });
  })
  
}
//  Create("nguyên",19)
async function a() {
  await Read();
  await Delete();
  await Read();
}
a();

module.exports = { Create, Read, Update, Delete };
