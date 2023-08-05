import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "/api/v1/employees"

const EmployeeService = {
  
  getEmployees: () => {
    return axios.get(EMPLOYEE_API_BASE_URL)
  },

  createEmployee: (employee) => {
    return axios.post(EMPLOYEE_API_BASE_URL, employee)
  },

  getEmployeeById: (id) => {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id)
  },

  updateEmployee: (id, employee) => {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee)
  },

  deleteEmployee: (id) => {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id)
  }
  
}

export default EmployeeService