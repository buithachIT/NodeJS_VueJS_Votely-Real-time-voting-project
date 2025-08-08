const User = require("../models/user.model");
const bcrypt = require("bcrypt");

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
module.exports = {
  createUserService,
};
