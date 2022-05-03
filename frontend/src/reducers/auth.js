export default (token = "", action) => {
  switch (action.type) {
    case "LOGIN":
      return token;

    default:
      return token;
  }
};