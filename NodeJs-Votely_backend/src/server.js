const connection = require("./config/database");
require("dotenv").config();
const app = require("./app");
const setupSwagger = require("./src/swagger");

const port = process.env.PORT;
setupSwagger(app);

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
