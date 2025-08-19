const { sendSuccess, sendError } = require("../helpers/response.helper");
const { registerSchema } = require("../schema/user.schema");
const { createUserService, loginService } = require("../services/user.service");

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

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return sendError(res, {
        message: "Email and password are required",
        statusCode: 400,
      });
    }

    const { accessToken, refreshToken, user } = await loginService(
      email,
      password
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return sendSuccess(res, {
      data: { accessToken, user },
      message: "Login successful",
      statusCode: 200,
    });
  } catch (error) {
    console.error(error);

    if (error.message === "Invalid email or password") {
      return sendError(res, { message: error.message, statusCode: 401 });
    }
    if (error.message === "Missing JWT_SECRET_KEY") {
      return sendError(res, {
        message: "Server misconfiguration",
        statusCode: 500,
      });
    }

    return sendError(res, {
      message: "Internal Server Error",
      statusCode: 500,
    });
  }
};
module.exports = {
  createUser,
  handleLogin,
};
