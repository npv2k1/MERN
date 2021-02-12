var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const flash = require("connect-flash");

require("./config/passport")(passport);
require("dotenv").config();




var app = express();
// Production React

// app.use(express.static("./../client/build"));

// view engine setup
app.use(cors());


app.use(passport.initialize());


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


// Routes
app.use("/api/users", require('./routes/api/users'));
app.use("/api/admin", require("./routes/api/admin"));


/*
 * Error 404
 */

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
