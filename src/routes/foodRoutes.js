const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createFoodController,
  getAllFoodsController,
  getSingleFoodController,
  getFoodByRestaurantController,
} = require("../controllers/foodController");

const router = express.Router();

router.post("/create", authMiddleware, createFoodController);
router.get("/getAll", getAllFoodsController);
router.get("/get/:id", getSingleFoodController);
router.get("/getByRestaurant/:id", getFoodByRestaurantController);

module.exports = router;
