import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  setEmployees,
  setError,
  setPostSuccess,
  setDeleteSuccess,
  loadEmployees,
  setUpdateSuccess,
  setRedirect,
} from "../actions";
import { toast } from "react-toastify";
import {
  fetchEmployees,
  postEmployees,
  deleteEmployees,
  updateEmployees,
} from "../api";
import EMPLOYEES from "../constants";

function* loadEmployeesSaga() {
  try {
    const employees = yield call(fetchEmployees);
    yield put(setEmployees(employees));
  } catch (error) {
    put(setError(error.toString()));
  }
}

//GET EMPLOYEE TO POST
const getPostEmployee = (state) => state.postEmployee;

function* postEmployeeSaga() {
  const result = yield select(getPostEmployee);
  const { data, errors } = yield call(postEmployees, result.postEmployee);
  console.log(
    "result.postEmployee error => " + JSON.stringify(result.postEmployee)
  );
  if (data) {
    yield put(setPostSuccess());
    yield put(setRedirect({ redirectTo: "/employee/list" }));
    yield toast.success("Employee Registered");
  } else {
    yield put(setError(errors));
    console.log("postEmployeeSaga error => " + JSON.stringify(errors));
  }
}

//GET EMPLOYEE TO DELETE
const getDeleteEmployee = (state) => state.deleteEmployee;

function* deleteEmployeeSaga() {
  const result = yield select(getDeleteEmployee);
  const { data, errors } = yield call(deleteEmployees, result.deleteEmployee);

  if (data.error == undefined) {
    console.log("deleteEmployeeSaga data => " + JSON.stringify(data));
    yield toast.success("Employee Deleted");
    yield put(setDeleteSuccess());
    yield put(loadEmployees());
  } else {
    console.log("deleteEmployeeSaga error => " + JSON.stringify(data.error));
    yield put(setError(data.error));
  }
}

//GET EMPLOYEE TO DELETE
const getUpdateEmployee = (state) => state.updateEmployee;

function* updateEmployeeSaga() {
  const result = yield select(getUpdateEmployee);
  const { data, errors } = yield call(updateEmployees, result.updateEmployee);

  if (data.error == undefined) {
    console.log("updateEmployeeSaga data => " + JSON.stringify(data));
    yield toast.success("Employee Updated");
    yield put(setUpdateSuccess());
    yield put(loadEmployees());
  } else {
    console.log("updateEmployeeSaga error => " + JSON.stringify(data.error));
    yield put(setError(data.error));
  }
}

function* rootSage() {
  yield takeEvery(EMPLOYEES.LOAD, loadEmployeesSaga);
  yield takeEvery(EMPLOYEES.POST_EMPLOYEE, postEmployeeSaga);
  yield takeEvery(EMPLOYEES.DELETE_EMPLOYEE, deleteEmployeeSaga);
  yield takeEvery(EMPLOYEES.UPDATE_EMPLOYEE, updateEmployeeSaga);
}

export default rootSage;
