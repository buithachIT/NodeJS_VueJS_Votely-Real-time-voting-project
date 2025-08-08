const { sendSuccess, sendError } = require("../helpers/response.helper");
const { registerSchema } = require("../schema/user.schema");
const { createUserService } = require("../services/user.service");

const createUser = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return sendError(res, {
      message: error.details[0].message,
      statusCode: 400,
    });
  }
  try {
    const { firstName, lastName, email, phone, password, confirmPassword } =
      req.body;
    const user = await createUserService(
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword
    );
    return sendSuccess(res, {
      data: user,
      message: "User created successfully",
      statusCode: 201,
    });
  } catch (error) {
    if (error.message === "Existing email") {
      return sendError(res, { message: error.message, statusCode: 400 });
    }
    console.error(error);
    return sendError(res, {
      message: "Server Internal Error",
      statusCode: 500,
    });
  }
};
module.exports = {
  createUser,
};
