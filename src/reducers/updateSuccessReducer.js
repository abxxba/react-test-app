import EMPLOYEES from "../constants";

const updateSuccessReducer = (state = false, action) => {
  if (action.type === EMPLOYEES.LOAD) {
    return false;
  } else if (action.type === EMPLOYEES.UPDATE_SUCCESS) {
    return true;
  }
  return state;
};

export default updateSuccessReducer;
