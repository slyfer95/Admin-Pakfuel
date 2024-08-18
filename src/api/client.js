import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://pakfuel.koyeb.app/api",
  // baseURL: "http://localhost:5000/api", // for testing locally
  withCredentials: true,
});

export default apiClient;

// baseURL: "https://sedate-ground-production.up.railway.app/api",

// baseURL: "http://localhost:5000/api",
