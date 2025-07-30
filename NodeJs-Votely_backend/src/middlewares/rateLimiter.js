const rateLimit = require("express-rate-limit");

const registerLimiter = rateLimit({
  window: 15 * 60 * 1000,
  max: 5,
  message: {
    status: 429,
    message: "Too much request, please try later!",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
module.exports = { registerLimiter };
