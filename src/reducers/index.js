import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import errorReducers from "./errorReducers";
import employeeReducers from "./employeeReducers";
import postEmployeeReducer from "./postEmployeeReducer";
import postSuccessReducer from "./postSuccessReducer";
import deleteEmployeeReducer from "./deleteEmployeeReducer";
import deleteSuccessReducer from "./deleteSuccessReducer";
import updateEmployeeReducer from "./updateEmployeeReducer";
import updateSuccessReducer from "./updateSuccessReducer";
import redirectReducer from "./redirectReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  employees: employeeReducers,
  error: errorReducers,
  postEmployee: postEmployeeReducer,
  postSuccess: postSuccessReducer,
  deleteSuccess: deleteSuccessReducer,
  deleteEmployee: deleteEmployeeReducer,
  updateEmployee: updateEmployeeReducer,
  updateSuccess: updateSuccessReducer,
  redirectTo: redirectReducer,
});

export default rootReducer;
