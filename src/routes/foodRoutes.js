const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createFoodController,
  getAllFoodsController,
  getSingleFoodController,
  getFoodByRestaurantController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  orderStatusController,
} = require("../controllers/foodController");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();

//Food
router.post("/create", authMiddleware, createFoodController);
router.get("/getAll", getAllFoodsController);
router.get("/get/:id", getSingleFoodController);
router.get("/getByRestaurant/:id", getFoodByRestaurantController);
router.put("/update/:id", authMiddleware, updateFoodController);
router.delete("/delete/:id", authMiddleware, deleteFoodController);

// Order
router.post("/placeorder", authMiddleware, placeOrderController);
router.post("/orderStatus/:id", adminMiddleware, authMiddleware, orderStatusController);

module.exports = router;
