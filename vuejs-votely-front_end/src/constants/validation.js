export const VALIDATION_RULES = {
  EMAIL: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Email không hợp lệ",
  },
  PASSWORD: {
    minLength: 6,
    message: "Mật khẩu phải từ 6 ký tự",
  },
  CONFIRM_PASSWORD: {
    message: "Mật khẩu không khớp",
  },
};

export const ERROR_MESSAGES = {
  EMAIL_INVALID: "Email không hợp lệ",
  PASSWORD_TOO_SHORT: "Mật khẩu phải từ 6 ký tự",
  PASSWORDS_NOT_MATCH: "Mật khẩu không khớp",
  REQUIRED_FIELD: "Trường này là bắt buộc",
};
