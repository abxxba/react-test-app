import EMPLOYEES from "../constants/index";

const deleteEmployeeReducer = (state = {}, action) => {
  if (action.type === EMPLOYEES.DELETE_EMPLOYEE) {
    return Object.assign({}, state, {
      deleteEmployee: action.deleteEmployee,
    });
  }
  return state;
};

export default deleteEmployeeReducer;
