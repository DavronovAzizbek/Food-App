const getUserController = async (req, res) => {
  res.status(200).send("User Data");
};

module.exports = {
  getUserController,
};
