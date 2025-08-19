const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUserService = async (
  firstName,
  lastName,
  email,
  phone,
  password
) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    let result = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      role: "voter",
      password: hashedPassword,
    });
    return result;
  } catch (error) {
    console.log(error);
    if (error.code === 11000 && error.keyPattern.email) {
      throw new Error("Existing email");
    }
    throw error;
  }
};

const loginService = async (email, password) => {
  try {
    const user = await User.findOne({ email: email }).select("+password");
    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password || "");
    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    if (!jwtSecretKey) {
      throw new Error("Missing JWT_SECRET_KEY");
    }

    const refreshToken = jwt.sign(
      { sub: user._id.toString() },
      process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const accessToken = jwt.sign(
      { sub: user._id.toString(), role: user.role },
      jwtSecretKey,
      { expiresIn: "15m" }
    );

    return { accessToken, refreshToken, user };
  } catch (err) {
    console.error("[loginService] error:", err.message);
    throw err;
  }
};
module.exports = {
  createUserService,
  loginService,
};
