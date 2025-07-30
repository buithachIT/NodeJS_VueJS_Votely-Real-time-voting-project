/**
 * @typedef {Object} RegisterFormData
 * @property {string} email - User email
 * @property {string} password - User password
 * @property {string} confirmPassword - Password confirmation
 */

/**
 * @typedef {Object} FormErrors
 * @property {string} email - Email validation error
 * @property {string} password - Password validation error
 * @property {string} confirmPassword - Confirm password validation error
 */

/**
 * @typedef {Object} ValidationResult
 * @property {boolean} isValid - Whether the form is valid
 * @property {FormErrors} errors - Validation errors
 */
