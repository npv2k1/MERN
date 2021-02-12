
const mongoose = require("mongoose");

require("dotenv").config();

// mongoose options
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
};

// mongodb environment variables
const { MONGO_HOSTNAME, MONGO_DB, MONGO_PORT } = process.env;

const dbConnectionURL = {
  LOCAL_DB_URL: `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`,
  REMOTE_DB_URL: process.env.MONGODB_URI, //atlas url
};
mongoose.connect(dbConnectionURL.LOCAL_DB_URL, options);
module.exports = { mongoose };