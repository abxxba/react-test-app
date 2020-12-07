import EMPLOYEES from "../constants/index";

const loadEmployees = () => ({
  type: EMPLOYEES.LOAD,
});

const setEmployees = (employees) => ({
  type: EMPLOYEES.LOAD_SUCCESS,
  employees,
});

const postEmployee = (postEmployee) => ({
  type: EMPLOYEES.POST_EMPLOYEE,
  postEmployee,
});

const deleteEmployee = (deleteEmployee) => ({
  type: EMPLOYEES.DELETE_EMPLOYEE,
  deleteEmployee,
});

const setDeleteSuccess = () => ({
  type: EMPLOYEES.DELETE_SUCCESS,
});

const setError = (error) => ({
  type: EMPLOYEES.LOAD_FAILED,
  error,
});

const setPostSuccess = () => ({
  type: EMPLOYEES.POST_SUCCESS,
});

const updateEmployeeData = (updateEmployee) => ({
  type: EMPLOYEES.UPDATE_EMPLOYEE,
  updateEmployee,
});

const setUpdateSuccess = () => ({
  type: EMPLOYEES.UPDATE_SUCCESS,
});

const setRedirect = (redirectTo) => ({
  type: EMPLOYEES.REDIRECT,
  redirectTo,
});

export {
  loadEmployees,
  setEmployees,
  setError,
  setPostSuccess,
  postEmployee,
  setDeleteSuccess,
  deleteEmployee,
  updateEmployeeData,
  setUpdateSuccess,
  setRedirect,
};
