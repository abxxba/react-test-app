import EMPLOYEES from "../constants/index";

const postEmployeeReducer = (state = {}, action) => {
  if (action.type === EMPLOYEES.POST_EMPLOYEE) {
    return Object.assign({}, state, {
      postEmployee: action.postEmployee,
    });
  }
  return state;
};

export default postEmployeeReducer;
