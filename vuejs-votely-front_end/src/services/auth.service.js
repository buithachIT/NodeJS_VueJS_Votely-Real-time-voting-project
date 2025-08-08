import { registerUserAPI } from "@/lib/actions/auth";

export async function registerUserService(formData) {
  const response = await registerUserAPI(formData);
  return response.data;
}
