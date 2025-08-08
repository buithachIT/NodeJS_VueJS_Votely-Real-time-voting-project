import axios from "@/utils/axios.customize";

export const registerUserAPI = formData => {
  return axios.post("/v1/api/register", formData);
};
