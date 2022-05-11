import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAsset } from "../../../actions/assets";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const initialState = { asset_name: "", description: "", quantity: "" };
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [assetData, setAssetData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createAsset(assetData));

    clear();
    navigate("/AssetList");
  };

  const clear = () => {
    setAssetData(initialState);
  };

  return (
    <Container>
      <h1>Add New Asset</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          name="asset_name"
          label="Assetname"
          variant="filled"
          onChange={(e) => setAssetData({ ...assetData, [e.target.name]: e.target.value })}
        />
        <TextField
          name="description"
          label="Asset Description"
          variant="filled"
          onChange={(e) => setAssetData({ ...assetData, [e.target.name]: e.target.value })}
        />
        <TextField
          name="quantity"
          label="Quantity"
          variant="filled"
          onChange={(e) => setAssetData({ ...assetData, [e.target.name]: e.target.value })}
        />
        <Button className={classes.button} variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default App;
