import apiClient from "./client";

const login = (email, password) => {
  return apiClient.post("/auth/admin/login", { email, password });
};

export default { login };
