const foodModal = require("../models/foodModal");

const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      restaurant,
      rating,
    } = req.body;

    if (!title || !description || !price || !restaurant) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    const newFood = new foodModal({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      restaurant,
      rating,
    });

    await newFood.save();
    res.status(201).send({
      success: true,
      message: "New Food Item Created",
      newFood,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Create Food API",
      error,
    });
  }
};

const getAllFoodsController = async (req, res) => {
  try {
    const foods = await foodModal.find({});
    if (!foods) {
      return res.status(404).send({
        success: false,
        message: "No Food Items Was Found",
      });
    }
    res.status(200).send({
      success: true,
      totalFoods: foods.length,
      foods,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get All Foods API",
      error,
    });
  }
};

const getSingleFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({
        success: false,
        message: "Please Provide ID",
      });
    }
    const food = await foodModal.findById(foodId);
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "No Food Found With This ID",
      });
    }
    res.status(200).send({
      success: true,
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get Single Food API",
      error,
    });
  }
};

const getFoodByRestaurantController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    if (!restaurantId) {
      return res.status(404).send({
        success: false,
        message: "Please Provide ID",
      });
    }
    const food = await foodModal.find({ restaurant: restaurantId });
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "No Food Found With This ID",
      });
    }
    res.status(200).send({
      success: true,
      message: "Food Base On Restaurant",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get Single Food API",
      error,
    });
  }
};

module.exports = {
  createFoodController,
  getAllFoodsController,
  getSingleFoodController,
  getFoodByRestaurantController,
};
