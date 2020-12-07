import EMPLOYEES from "../constants";

const errorReducer = (state = null, action) => {
  if (action.type === EMPLOYEES.LOAD) {
  }
  if (action.type === EMPLOYEES.LOAD_SUCCESS) {
    return null;
  } else if (action.type === EMPLOYEES.LOAD_FAILED) {
    return action.error;
  }
  return state;
};

export default errorReducer;
