const { registerSchema } = require("../schema/user.schema");
const { createUserService } = require("../services/user.service");

const createUser = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const user = await createUserService(
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );
    return res.status(201).json(user);
  } catch (error) {
    if (error.message === "Existing email") {
      return res.status(400).json({ message: error.message });
    }
    console.error(error);
    return res.status(500).json({ message: "Server Internal Error" });
  }
};
module.exports = {
  createUser,
};
