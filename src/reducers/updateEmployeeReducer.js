import EMPLOYEES from "../constants/index";

const updateEmployeeReducer = (state = {}, action) => {
  if (action.type === EMPLOYEES.UPDATE_EMPLOYEE) {
    return Object.assign({}, state, {
      updateEmployee: action.updateEmployee,
    });
  }
  return state;
};

export default updateEmployeeReducer;
