const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    name: { type: String, required: true, },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    followers: { type: Array },
    follows: { type: Array },
    avatar: {
      data: Buffer,
      contentType: String
    },
    favorites: { type: Array },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

UserSchema.virtual('recipes', {
  ref: 'Recipe',
  localField: 'userId',
  foreignField: 'authorId'
})

const User = mongoose.model("User", UserSchema);

module.exports = User;