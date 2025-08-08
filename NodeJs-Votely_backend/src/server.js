const connection = require("./config/database");
require("dotenv").config();
const app = require("./app");

const port = process.env.PORT;

(async () => {
  try {
    await connection();
    app.listen(port, async () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
