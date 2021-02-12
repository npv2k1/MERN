const mongoose = require("./initdb").mongoose;

const transactionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  }
});
// tạo model
const Transactions = mongoose.model("transactions", transactionSchema);

module.exports = Transactions;
