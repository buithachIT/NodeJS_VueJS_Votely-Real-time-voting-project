const sendSuccess = (
  res,
  data = null,
  message = "Success",
  statusCode = 200
) => {
  return res.status(statusCode).json({
    success: true,
    data,
    message,
    errors: null,
  });
};

const sendError = (res, errors = null, message = "Error", statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    data: null,
    message,
    errors,
  });
};

module.exports = {
  sendSuccess,
  sendError,
};
