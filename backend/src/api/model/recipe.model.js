const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const RecipeSchema = new mongoose.Schema(
  {
    recipeId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    title: { type: String, required: true, default: '' },
    description: { type: String, default: '' },
    ingredients: { type: Array, default: [] },
    author: { type: String, required: true, default: '' }
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;