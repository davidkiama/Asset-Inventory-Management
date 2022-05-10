export default (assets = [], action) => {
  switch (action.type) {
    case "CREATE_ASSET":
      return action.payload;

    case "FETCH_ASSETS":
      return action.payload;

    default:
      return assets;
  }
};
