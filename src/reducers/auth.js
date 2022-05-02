export default (token = "", action) => {
  switch (action.type) {
    case "REGISTER":
      return token;

    default:
      return token;
  }
};
