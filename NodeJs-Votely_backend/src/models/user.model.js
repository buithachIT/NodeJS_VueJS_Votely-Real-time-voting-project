const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["voter", "admin"],
      default: "voter",
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.role;
  return obj;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
