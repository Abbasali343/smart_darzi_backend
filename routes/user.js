const express = require("express");
const router = express.Router();

const controller = require("../controllers/user.controller");

router.route("/addCustomer").post(controller.addPersonalInfo);
// router.route("/updateUser").patch(controller.updatePersonalInfo);
router.route("/allCustomers").get(controller.allCustomers);
router.route("/oneCustomer").get(controller.oneCustomer);
router.route("/deleteCustomer").delete(controller.deleteCustomer);
module.exports = router;
