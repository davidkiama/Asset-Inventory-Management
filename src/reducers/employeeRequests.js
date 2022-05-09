export default (employeeRequests = [], action) => {
  switch (action.type) {
    case "FETCH_REQUESTS":
      return action.payload;

    case "CREATE_REQUEST":
      return action.payload;

    default:
      return employeeRequests;
  }
};
