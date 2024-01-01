const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  cuffStyle: {
    type: String,
    required: true,
  },
  neckStyle: {
    type: String,
    required: true,
  },
  buttonStyle: {
    type: String,
    required: true,
  },
  pocketStyle: {
    type: String,
    required: true,
  },
  elastic: {
    type: String,
    required: true,
  },
  embroidery: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  bookNumber: {
    type: Number,
    required: true,
  },
  designNumber: {
    type: Number,
    required: true,
  },
});

const order = mongoose.model("ORDER", orderSchema);

module.exports = order;
