import "bootstrap/dist/css/bootstrap.min.css";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers";
import rootSaga from "./saga";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware)
  //   compose(
  //     applyMiddleware(sagaMiddleware),
  //     window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
  //   )
);
sagaMiddleware.run(rootSaga);

// optional configuration
const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 10000,
  offset: "30px",
  transition: transitions.SCALE,
};

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Fragment>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </Fragment>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
