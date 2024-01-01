const User = require("../model/customerSchema");

exports.addPersonalInfo = async (req, res, next) => {
  try {
    const {
      name,
      phoneNumber,
      id,
      familyName,
      length,
      shoulder,
      chest,
      neck,
      armLength,
      armRound,
      waist,
      lap,
      lengthOfTrouser,
      ankleWidth,
      hips,
    } = req.body;
    if (
      !name ||
      !phoneNumber ||
      !id ||
      !familyName ||
      !length ||
      !shoulder ||
      !chest ||
      !neck ||
      !armLength ||
      !armRound ||
      !waist ||
      !lap ||
      !lengthOfTrouser ||
      !ankleWidth ||
      !hips
    ) {
      return res.status(404).json({ error: "Fill all fields carefully" });
    }

    User.findOne({ phoneNumber: phoneNumber }).then((useExist) => {
      if (useExist) {
        return res.status(403).json({ error: "User Exist with this Number" });
      }

      const user = new User({
        name,
        phoneNumber,
        id,
        familyName,
        length,
        shoulder,
        chest,
        neck,
        armLength,
        armRound,
        waist,
        lap,
        lengthOfTrouser,
        ankleWidth,
        hips,
      });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "User Added Successfully" });
        })
        .catch((err) => res.status(500).json({ error: "Failed to add User" }));
    });
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

exports.allCustomers = async (req, res, next) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Data Not Found" });
  }
};
exports.oneCustomer = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.status(404).json({ error: "Fill All Fields Carefully" });
    }
    const data = await User.findOne({ phoneNumber: phoneNumber });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json("Data Not Found");
    }
  } catch (error) {
    res.status(500).json({ message: "Error in Request" });
  }
};
exports.deleteCustomer = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;
    User.findOne({ phoneNumber: phoneNumber }).then((UserExist) => {
      if (!UserExist) {
        return res
          .status(403)
          .json({ error: "User does not exist with this Phone Number" });
      }

      User.findOneAndDelete({ phoneNumber: phoneNumber }).then(() => {
        res.status(200).json(`Document has been deleted..`);
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Data Not Found" });
  }
};
