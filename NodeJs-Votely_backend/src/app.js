const express = require("express");
const apiRoutes = require("./routes/api");
const cors = require("cors");

const app = express();
//config cors
app.use(cors());
//config for request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/v1/api/", apiRoutes);

module.exports = app;
