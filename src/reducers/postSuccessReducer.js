import EMPLOYEES from "../constants";

const postSuccessReducer = (state = false, action) => {
  if (action.type === EMPLOYEES.LOAD) {
    return false;
  } else if (action.type === EMPLOYEES.POST_SUCCESS) {
    return true;
  }
  return state;
};

export default postSuccessReducer;
