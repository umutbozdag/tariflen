const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const CategorySchema = new mongoose.Schema({
    categoryId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
  },
  { timestamps: true, toJSON: { virtuals: true} }
);

CategorySchema.virtual('recipes', {
  ref: 'Recipe',
  localField: 'categoryId',
  foreignField: 'categoryId'
})

CategorySchema.virtual('recipes.author', {
  ref: 'User',
  localField: 'authorId',
  foreignField: 'userId'
})

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;