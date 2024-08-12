import apiClient from "./client";

const login = (email, password) => {
  return apiClient.post("/auth/admin/login", { email, password });
};

const checkAuth = () => apiClient.get("/auth/admin/checkAuth", {});

const logout = () => apiClient.post("/auth/admin/logout", {});

export default { login, checkAuth, logout };
