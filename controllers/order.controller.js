const Order = require("../model/orderSchema");
const User = require("../model/customerSchema");

exports.addOrder = async (req, res, next) => {
  try {
    const {
      customerId,
      cuffStyle,
      neckStyle,
      buttonStyle,
      pocketStyle,
      elastic,
      embroidery,
      style,
      bookNumber,
      designNumber,
    } = req.body;

    if (
      !customerId ||
      !cuffStyle ||
      !neckStyle ||
      !buttonStyle ||
      !pocketStyle ||
      !elastic ||
      !embroidery ||
      !style ||
      !bookNumber ||
      !designNumber
    ) {
      return res.status(400).json({ error: "Fill all fields carefully" });
    }

    const customerExist = await User.findOne({ _id: customerId });

    if (!customerExist) {
      return res.status(403).json({ error: "Invalid customer Id" });
    }

    const order = new Order({
      customerId,
      cuffStyle,
      neckStyle,
      buttonStyle,
      pocketStyle,
      elastic,
      embroidery,
      style,
      bookNumber,
      designNumber,
    });

    await order.save();

    res.status(201).json({ message: "Order Added Successfully" });
  } catch (error) {
    next(error);
  }
};

// exports.UpdateCustomer = async (req, res, next) => {
//   try {
//     const { name, email, phoneNo } = req.body;
//     if (!name || !email || !phoneNo) {
//       return res.status(404).json({ error: "Fill all fields carefully" });
//     }

//     User.findOne({ name: name }).then((userExist) => {
//       if (!userExist) {
//         return res.status(403).json({ error: "User does not Exist" });
//       }

//       User.findOneAndUpdate({ name: name }, { email: email, phoneNo: phoneNo })
//         .then(() => {
//           res
//             .status(201)
//             .json({ message: "Contact Info Updated Successfully" });
//         })
//         .catch((err) =>
//           res.status(500).json({ error: "Failed to Update Contact Info" })
//         );
//     });
//   } catch (error) {
//     next(error);
//   }
// };

exports.allOrders = async (req, res, next) => {
  try {
    const data = await Order.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Data Not Found" });
  }
};
exports.oneOrder = async (req, res, next) => {
  try {
    const { customerId } = req.body;
    if (!customerId) {
      return res.status(404).json({ error: "Fill All Fields Carefully" });
    }
    const data = await Order.findOne({ _id: customerId });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json("Data Not Found");
    }
  } catch (error) {
    res.status(500).json({ message: "Error in Request" });
  }
};
exports.deleteOrder = async (req, res, next) => {
  try {
    const { orderId } = req.body;
    Order.findOne({ _id: orderId }).then((orderExist) => {
      if (!orderExist) {
        return res.status(403).json({ error: "Invalid Id" });
      }

      Order.findOneAndDelete({ _id: orderId }).then(() => {
        res.status(200).json(`Document has been deleted..`);
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Data Not Found" });
  }
};
