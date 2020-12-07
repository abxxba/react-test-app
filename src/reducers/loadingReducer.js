import EMPLOYEES from "../constants";

const loadingReducer = (state = false, action) => {
  if (action.type === EMPLOYEES.LOAD) {
    return true;
  } else if (action.type === EMPLOYEES.LOAD_SUCCESS) {
    return false;
  } else if (action.type === EMPLOYEES.LOAD_FAILED) {
    return false;
  } else if (action.type === EMPLOYEES.POST_EMPLOYEE) {
    return true;
  } else if (action.type === EMPLOYEES.POST_SUCCESS) {
    return false;
  }

  return state;
};

export default loadingReducer;
