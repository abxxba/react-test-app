//const BASE_URL = "http://localhost:4000/api/employees";
const BASE_URL = "https://employee-node-api.herokuapp.com/api/employees";

const fetchEmployees = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  if (data.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const postEmployees = async (employee) => {
  console.log("postEmployees => " + JSON.stringify(employee));
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  const data = await response.json();
  if (data.status >= 400 || data.errors) {
    return { errors: data.errors };
  }
  return { data };
};

const deleteEmployees = async (employee) => {
  console.log("deleteEmployees => " + JSON.stringify(employee));
  const response = await fetch(BASE_URL + "/" + employee._id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (data.status >= 400 && data.error) {
    console.log("deleteEmployees error ");
    //throw new Error(data);
    return { errors: data.errors };
  }
  return { data };
};

const updateEmployees = async (employee) => {
  console.log("updateEmployees => " + JSON.stringify(employee));
  const response = await fetch(BASE_URL + "/" + employee._id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  const data = await response.json();
  if (data.status >= 400 && data.error) {
    console.log("updateEmployees error ");
    //throw new Error(data);
    return { errors: data.errors };
  }
  return { data };
};

export { fetchEmployees, postEmployees, deleteEmployees, updateEmployees };
