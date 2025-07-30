const express = require("express");

const routerAPI = express.Router();

routerAPI.get("/buithach", (req, res) => {
  return res.status(200).json("Bui Cong Thach");
});

module.exports = routerAPI;
