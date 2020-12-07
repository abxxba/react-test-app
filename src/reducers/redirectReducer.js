import EMPLOYEES from "../constants";

const redirectReducer = (state = {}, action) => {
  if (action.type === EMPLOYEES.REDIRECT) {
    return action.redirectTo;
  }
  return state;
};

export default redirectReducer;
