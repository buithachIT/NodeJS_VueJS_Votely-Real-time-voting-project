import { useToast } from "primevue/usetoast";
import { registerUserService } from "@/services/auth.service";

export function useRegisterForm() {
  const toast = useToast();

  const submit = async form$ => {
    try {
      const res = await registerUserService(form$.data);

      toast.add({
        severity: "success",  
        summary: "Registration Successful",
        detail: "You can now log in.",
      });

      return res;
    } catch (error) {
      const msg =
        error?.response?.data?.message || "An unexpected error occurred.";

      toast.add({
        severity: "error",
        summary: "Registration Failed",
        detail: msg,
      });

      if (error?.response?.data?.errors) {
        form$.setErrors(error.response.data.errors);
      }

      throw error;
    }
  };

  return { submit };
}
