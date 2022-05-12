export default (employeeRequests = [], action) => {
  switch (action.type) {
    case "FETCH_REQUESTS":
      return action.payload;

    case "CREATE_REQUEST":
      return [...employeeRequests, action.payload];

    case "APPROVE_REQUEST":
      return [...employeeRequests, action.payload];

    case "REJECT_REQUEST":
      return action.payload;

    default:
      return employeeRequests;
  }
};
