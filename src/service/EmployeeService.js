import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employee";

export const listEmployees = async () => await axios.get(REST_API_BASE_URL);

export const addEmployee = async (employee) => await axios.post(REST_API_BASE_URL, employee);