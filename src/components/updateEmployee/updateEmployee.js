import { TextField, Button, LinearProgress } from "@material-ui/core";
import React, { Component } from "react";
import EMPLOYEES from "../../constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import styled from "styled-components";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { updateEmployeeData, setUpdateSuccess } from "../../actions";
import { compose } from "redux";

const ShadowDiv = styled.div`
  width: 100%;
`;

const HeaderTitle = styled.h1`
  font-size: x-large !important;
  color: #3a3a3a !important;
`;

const HeaderSubTitle = styled.h1`
  font-size: large !important;
  color: #3a3a3a !important;
  margin-top: 12px;
`;

class updateEmployee extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getError = this.getError.bind(this);
    this.hasError = this.hasError.bind(this);
    this.getEmployeeValue = this.getEmployeeValue.bind(this);
    this.state = {
      selectedDate: new Date(Date.now()),
    };
  }

  componentDidMount() {
    const { location } = this.props;
    console.log("location => " + JSON.stringify(location.employee));
  }

  async handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.props.updateEmployeeData({
      _id: this.props.location.employee._id,
      name: formData.get("name"),
      dateOfBirth: formData.get("dateOfBirth"),
      gender: formData.get("gender"),
      salary: formData.get("salary"),
    });
    console.log("handleSubmit => " + formData.get("dateOfBirth"));
  }

  getError = (input) => {
    let inputError = "";
    if (this.props.error != undefined && !this.props.updateSuccess) {
      let errors = this.props.error;
      errors.forEach((error) => {
        if (error.param != undefined) {
          if (input == error.param) {
            inputError = inputError + "\n" + error.msg;
          }
        }
      });
    } else {
      return inputError;
    }
    return inputError;
  };

  hasError = (input) => {
    let hasError = false;
    if (this.props.error != undefined && !this.props.updateSuccess) {
      let errors = this.props.error;
      errors.forEach((error) => {
        if (error.param != undefined) {
          if (input == error.param) {
            hasError = true;
            return false;
          }
        }
      });
    } else {
      return hasError;
    }
    return hasError;
  };

  getEmployeeValue = (input) => {
    if (this.props.location.employee) {
      if (input == "name") {
        return this.props.location.employee.name;
      } else if (input == "gender") {
        return this.props.location.employee.gender;
      } else if (input == "dateOfBirth") {
        return this.props.location.employee.dateOfBirth;
      } else if (input == "salary") {
        return this.props.location.employee.salary;
      } else return "";
    }
    return "";
  };

  render() {
    return (
      <div className="container">
        <ToastContainer />
        <div>
          {(() => {
            if (this.props.isLoading) {
              return <LinearProgress color="primary" />;
            }
          })()}
        </div>

        <div className="row">
          <form
            className="col-12"
            noValidate
            onSubmit={this.handleSubmit}
            id="update-form"
          >
            <ShadowDiv className="card">
              <div className="card-header">
                <HeaderTitle>Update an Employee</HeaderTitle>
                <HeaderSubTitle className="text-muted mt-2">
                  Fill the Form
                </HeaderSubTitle>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12 mb-3">
                    <TextField
                      error={this.hasError("name")}
                      id="filled-basic"
                      label="Employee full name"
                      variant="filled"
                      name="name"
                      defaultValue={this.getEmployeeValue("name")}
                      helperText={this.getError("name")}
                      required
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <TextField
                      id="filled-basic"
                      label="Gender"
                      variant="filled"
                      name="gender"
                      defaultValue={this.getEmployeeValue("gender")}
                      error={this.hasError("gender")}
                      helperText={this.getError("gender")}
                      required
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <TextField
                      id="filled-basic"
                      label="Salary"
                      type="number"
                      variant="filled"
                      defaultValue={this.getEmployeeValue("salary")}
                      error={this.hasError("salary")}
                      helperText={this.getError("salary")}
                      name="salary"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        fullWidth
                        format="yyyy/MM/dd"
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date Of Birth"
                        error={this.hasError("dateOfBirth")}
                        defaultValue={this.getEmployeeValue("dateOfBirth")}
                        helperText={this.getError("dateOfBirth")}
                        name="dateOfBirth"
                        required
                        value={this.state.selectedDate}
                        onChange={(value) => {
                          this.setState({
                            selectedDate: new Date(value),
                          });
                        }}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-6">
                    <Button variant="contained" color="primary" type="submit">
                      Update
                    </Button>
                  </div>
                  <div className="col-6">
                    <Button
                      variant="contained"
                      type="reset"
                      onClick={() => {
                        this.setState({
                          selectedDate: new Date(Date.now()),
                        });
                      }}
                      color="secondary"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </div>
            </ShadowDiv>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateEmployeeData: (employee) => dispatch(updateEmployeeData(employee)),
  setUpdateSuccess: (success) => dispatch(setUpdateSuccess(success)),
});

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  updateSuccess: state.updateSuccess,
  error: state.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(updateEmployee);
