const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createRestaurantController,
  getAllRestaurantController,
  getRestaurantByIdController,
  deleteRestaurantController,
} = require("../controllers/restaurantController");

const router = express.Router();

router.post("/create", authMiddleware, createRestaurantController);
router.get("/getAll", getAllRestaurantController);
router.get("/get/:id", getRestaurantByIdController);
router.delete("/delete/:id", authMiddleware, deleteRestaurantController);

module.exports = router;
