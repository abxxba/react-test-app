import React, { Component } from "react";
import styled from "styled-components";
import DataTable, { createTheme } from "react-data-table-component";
import { loadEmployees, deleteEmployee } from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { browserHistory } from "react-router";
import "./employeesTable.css";
import { ToastContainer } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import { LinearProgress } from "@material-ui/core";
import { compose } from "redux";

const SmallIconStyle = styled.i`
  margin-right: 0rem;
`;

class employeesTable extends Component {
  componentDidMount() {
    this.props.loadEmployees();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete = (row) => {
    this.props.deleteEmployee(row);
  };

  handleUpdate = (row) => {
    const { history } = this.props;
    history.push({
      pathname: "/employee/update",
      employee: row,
    });
  };

  render() {
    const { employees } = this.props;
    const columns = [
      {
        name: "Name",
        selector: "name",
        sortable: true,
      },
      {
        name: "Gender",
        selector: "gender",
        sortable: true,
        right: true,
      },
      {
        name: "Date Of Birth",
        selector: "dateOfBirth",
        sortable: true,
        right: true,
      },
      {
        name: "Salary",
        selector: "salary",
        sortable: true,
        right: true,
      },
      {
        cell: (row) => (
          <button
            className="btn btn-primary"
            onClick={() => this.handleUpdate(row)}
          >
            <SmallIconStyle className="fa fa-user-edit fa-xs"></SmallIconStyle>
            {"  "}
            Update
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
      {
        cell: (row) => (
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(row)}
          >
            <SmallIconStyle className="fa fa-trash fa-xs"></SmallIconStyle>
            {"  "}
            Delete
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
    ];

    createTheme("solarized", {
      text: {
        primary: "#000",
        secondary: "#505050",
      },
      background: {
        default: "#f8f9fa",
      },
      context: {
        background: "#fff",
        text: "#FFFFFF",
      },
      divider: {
        default: "#dee2e6",
      },
      action: {
        button: "#3f51b5",
        hover: "rgba(0,0,0,.08)",
        disabled: "#3f51b5",
      },
    });

    return (
      <div>
        <ToastContainer />
        <div>
          {(() => {
            if (this.props.isLoading) {
              return <LinearProgress color="primary" />;
            }
          })()}
        </div>
        <DataTable
          className="card shadow mb-4"
          title="List Of Employees"
          data={employees}
          columns={columns}
          pagination
          theme="solarized"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadEmployees: () => dispatch(loadEmployees()),
  deleteEmployee: (employee) => dispatch(deleteEmployee(employee)),
});

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  employees: state.employees,
  error: state.error,
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(employeesTable);
