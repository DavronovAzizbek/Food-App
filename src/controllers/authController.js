const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone, address } = req.body;

    if (!userName || !email || !password || !phone || !address) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(409).send({
        success: false,
        message: "Email Already Registered, please Login",
      });
    }

    const user = await userModel.create({
      userName,
      email,
      password,
      address,
      phone,
    });

    res.status(201).send({
      success: true,
      message: "Successfully Registered",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error: error.message,
    });
  }
};

module.exports = {
  registerController,
};
