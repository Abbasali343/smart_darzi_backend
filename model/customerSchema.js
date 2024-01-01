const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  shoulder: {
    type: String,
    required: true,
  },
  chest: {
    type: String,
    required: true,
  },
  neck: {
    type: String,
    required: true,
  },
  armLength: {
    type: String,
    required: true,
  },
  armRound: {
    type: String,
    required: true,
  },
  waist: {
    type: String,
    required: true,
  },
  lap: {
    type: String,
    required: true,
  },
  lengthOfTrouser: {
    type: String,
    required: true,
  },
  ankleWidth: {
    type: String,
    required: true,
  },
  hips: {
    type: String,
    required: true,
  },

});

const customer = mongoose.model("CUSTOMER", customerSchema);

module.exports = customer;
