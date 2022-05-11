import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import CompanyAssets from "../../CompanyAssets/CompanyAssets";

import { fetchAssets } from "../../../actions/assets";

function AssetList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAssets());
  }, [dispatch]);

  return (
    <>
      <h2>Title - Company Assets</h2>
      <CompanyAssets />
    </>
  );
}

export default AssetList;
