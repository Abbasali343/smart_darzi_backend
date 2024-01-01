const express = require("express");
const router = express.Router();

const controller = require("../controllers/order.controller");

router.route("/addOrder").post(controller.addOrder);
// router.route("/updateUser").patch(controller.updatePersonalInfo);
router.route("/allOrders").get(controller.allOrders);
router.route("/oneOrder").get(controller.oneOrder);
router.route("/deleteOrder").delete(controller.deleteOrder);
module.exports = router;