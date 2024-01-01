const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

require("./db/conn");

const User = require("./model/customerSchema");
const Order = require("./model/orderSchema");
// const Testimonial = require("./model/testimonialSchema");
// const Contact = require("./model/contactSchema");
// const Profession = require("./model/professionSchema");
// const Education = require("./model/educationSchema");
// const Portfolio = require("./model/portfolioSchema");
// const Media = require("./model/mediaSchema");
// const imageSchema = require("./model/imageSchema");

// const users = require("./routes/users");
const user = require("./routes/user");
const order = require("./routes/order");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({ origin: "*" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/v1/users", users);
app.use("/v1/user", user);
app.use("/v1/order", order);

// app.get("/", (req, res) => {
//   res.send("Abbas");
// });

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
