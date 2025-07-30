const express = require("express");
const apiRoutes = require("./routes/api");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

//template engine
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/v1/api/", apiRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
