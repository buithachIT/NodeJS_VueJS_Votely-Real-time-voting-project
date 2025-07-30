import { VALIDATION_RULES, ERROR_MESSAGES } from "@/constants/validation";

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
export const validateEmail = email => {
  return VALIDATION_RULES.EMAIL.pattern.test(email);
};

/**
 * Validate password length
 * @param {string} password - Password to validate
 * @returns {boolean} - Whether password meets minimum length
 */
export const validatePassword = password => {
  return password.length >= VALIDATION_RULES.PASSWORD.minLength;
};

/**
 * Validate password confirmation
 * @param {string} password - Original password
 * @param {string} confirmPassword - Password confirmation
 * @returns {boolean} - Whether passwords match
 */
export const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

/**
 * Get validation error message
 * @param {string} field - Field name
 * @param {string} value - Field value
 * @param {Object} formData - Complete form data
 * @returns {string} - Error message or empty string
 */
export const getValidationError = (field, value, formData = {}) => {
  switch (field) {
    case "email":
      return !validateEmail(value) ? ERROR_MESSAGES.EMAIL_INVALID : "";
    case "password":
      return !validatePassword(value) ? ERROR_MESSAGES.PASSWORD_TOO_SHORT : "";
    case "confirmPassword":
      return !validateConfirmPassword(formData.password, value)
        ? ERROR_MESSAGES.PASSWORDS_NOT_MATCH
        : "";
    default:
      return "";
  }
};
