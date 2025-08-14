import { loginUserAPI, registerUserAPI } from "@/lib/actions/auth";

export async function registerUserService(formData) {
  const response = await registerUserAPI(formData);
  return response.data;
}
export async function loginUserService(formData) {
  const response = await loginUserAPI(formData);
  return response.data;
}
