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
    followers: { type: Array },
    follows: { type: Array },
    avatar: {
      data: Buffer,
      contentType: String
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;