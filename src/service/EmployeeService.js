import axios from "axios";

const REST_API_BASE_URL = "https://ems-springboot-backend-b0c75be7bca0.herokuapp.com/api/employee";

export const listEmployees = async () => await axios.get(REST_API_BASE_URL);

export const addEmployee = async (employee) => await axios.post(REST_API_BASE_URL, employee);

export const getEmployeeById = async (id) => await axios.get(`${REST_API_BASE_URL}/${id}`);

export const updateEmployeeById = async (id, employee) => await axios.put(`${REST_API_BASE_URL}/${id}`, employee);

export const deleteEmployeeById = async (id) => await axios.delete(`${REST_API_BASE_URL}/${id}`);