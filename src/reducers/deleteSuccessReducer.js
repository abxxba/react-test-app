import EMPLOYEES from "../constants";

const deleteSuccessReducer = (state = false, action) => {
  if (action.type === EMPLOYEES.LOAD) {
    return false;
  } else if (action.type === EMPLOYEES.DELETE_SUCCESS) {
    return true;
  }
  return state;
};

export default deleteSuccessReducer;
