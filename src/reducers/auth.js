export default (token = "", action) => {
  switch (action.type) {
    case "REGISTER":
      return token;
    case "LOGIN":
      return token;

    default:
      return token;
  }
};
