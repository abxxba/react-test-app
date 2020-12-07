import EMPLOYEES from "../constants/index";

const employeeReducer = (state = [], action) => {
  if (action.type === EMPLOYEES.LOAD_SUCCESS) {
    return action.employees;
  }
  return state;
};

export default employeeReducer;
