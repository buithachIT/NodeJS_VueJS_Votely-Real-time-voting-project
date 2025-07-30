import { reactive, computed } from "vue";
import { getValidationError } from "@/utils/validation";
import { registerUser } from "@/services/auth";

export default function useRegisterForm() {
  const form = reactive({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const errors = reactive({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isLoading = reactive({
    submitting: false,
  });

  // Computed properties for real-time validation
  const isFormValid = computed(() => {
    return (
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      form.email &&
      form.password &&
      form.confirmPassword
    );
  });

  /**
   * Validate a specific field
   * @param {string} field - Field name to validate
   */
  const validateField = field => {
    const value = form[field];
    errors[field] = getValidationError(field, value, form);
  };

  /**
   * Validate all fields
   * @returns {boolean} - Whether form is valid
   */
  const validate = () => {
    validateField("email");
    validateField("password");
    validateField("confirmPassword");

    return !errors.email && !errors.password && !errors.confirmPassword;
  };

  /**
   * Handle form submission
   */
  const onSubmit = async () => {
    if (!validate()) return;

    try {
      isLoading.submitting = true;

      const userData = {
        email: form.email,
        password: form.password,
      };

      const response = await registerUser(userData);
      console.log("Registration successful:", response);

      // Reset form after successful registration
      resetForm();

      // TODO: Show success message and redirect
    } catch (error) {
      console.error("Registration failed:", error);
      // TODO: Show error message
    } finally {
      isLoading.submitting = false;
    }
  };

  /**
   * Reset form to initial state
   */
  const resetForm = () => {
    form.email = "";
    form.password = "";
    form.confirmPassword = "";

    errors.email = "";
    errors.password = "";
    errors.confirmPassword = "";
  };

  return {
    form,
    errors,
    isLoading,
    isFormValid,
    validateField,
    validate,
    onSubmit,
    resetForm,
  };
}
