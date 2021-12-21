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
      data: Buffer,
      contentType: String
    },
  },
  { timestamps: true, toJSON: { virtuals: true} }
);

CategorySchema.virtual('recipes', {
  ref: 'Recipe',
  localField: 'categoryId',
  foreignField: 'categoryId'
})

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;