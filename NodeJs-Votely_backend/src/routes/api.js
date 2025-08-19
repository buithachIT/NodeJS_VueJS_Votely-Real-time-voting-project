const express = require("express");
const { createUser, handleLogin } = require("../controllers/user.controller");
const { registerLimiter } = require("../middlewares/rateLimiter");

const routerAPI = express.Router();

// routerAPI.get("/buithach", (req, res) => {
//   return res.status(200).json("Bui Cong Thach");
// });
routerAPI.post("/register", registerLimiter, createUser);

routerAPI.post("/login", handleLogin);

module.exports = routerAPI;
