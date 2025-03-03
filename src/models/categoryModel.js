const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Category title is required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
