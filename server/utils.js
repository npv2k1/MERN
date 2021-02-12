// generate token using secret from process.env.JWT_SECRET
var jwt = require("jsonwebtoken");

// generate token and return it
function generateToken(user) {
  //1. Don't use password and other sensitive fields
  //2. Use the information that are useful in other parts

  if (!user) return null;

  var u = {
    userId: user._id,
    firstname: user.firstname,
    lastname:user.lastname,
    email: user.email,
    phone:user.phone,
    username: user.username,
    role: user.role,
  };

  return jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24, // expires in 24 hours
  });
}

// return basic user details
function getCleanUser(user) {
  if (!user) return null;

  return {
    userId: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    phone: user.phone,
    username: user.username,
    role: user.role,
  };
}
function dateFormat(string) {
  let re = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/;
  let res = re.exec(string);
  if (!res) {
    console.log(res.input + "ERROR");
  } else {
    let x = res[0].split(/\/|-|\./gi);
    // console.log(x)
    return new Date(
      parseInt(x[2]),
      parseInt(x[1]) - 1,
      parseInt(x[0])
    ).toISOString();
  }
}
module.exports = {
  generateToken,
  getCleanUser,
  dateFormat,
};
