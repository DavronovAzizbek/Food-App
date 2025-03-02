const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to Database ${mongoose.connection.host}`.bgBlue);
  } catch (error) {
    console.log("Db Error", error);
  }
};

module.exports = connectDb;
