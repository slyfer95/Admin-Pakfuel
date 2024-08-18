import client from "./client";

const getProfile = () => client.get("/admin/profile", {});

const getPumpList = () => client.get("/pump/getPumpList", {});

const addPump = (name, corporation, location, coordinates) => {
  return client.post("/pump/addPump", {
    name,
    corporation,
    location,
    coordinates,
  });
};

const addEmployeeToPump = (employeeEmail, pumpId) =>
  client.post("/pump/addEmployeeToPump", { employeeEmail, pumpId });

const addManagerToPump = (managerEmail, pumpId) =>
  client.post("/pump/addManagerToPump", { managerEmail, pumpId });

const removeEmployeeFromPump = (employeeEmail, pumpId) =>
  client.post("/pump/removeEmployeeFromPump", { employeeEmail, pumpId });

const getDashboardStats = () => client.get("/admin/dashboard-stats", {});

const getCustomerList = () => client.get("/customer/getCustomerList", {});

const getAllEmployeeList = () =>
  client.get("/employee/getAllEmployeesList", {});

const uploadImage = (image) => client.post("/admin/image", { image });

export default {
  getPumpList,
  getCustomerList,
  getAllEmployeeList,
  addPump,
  addEmployeeToPump,
  addManagerToPump,
  removeEmployeeFromPump,
  getProfile,
  getDashboardStats,
  uploadImage,
};
