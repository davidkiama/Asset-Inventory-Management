import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import CompanyAssets from "../../CompanyAssets/CompanyAssets";

import { fetchAssets } from "../../../actions/assets";
import "./AssetList.css";

function AssetList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAssets());
  }, [dispatch]);

  return (
    <>
      <div class="manager-dashboard">
        <h1 className="manager_approval">Company Assets Available</h1>

        <Link to="/Asset" className="side-btn">
          Add asset
        </Link>

        <div class="container-fluid">
          <div class="row ">
            <div class="col-md-2 col-sm-2">{/* sidebar */}</div>
            <div class="col-md-8 col-sm-8">
              <CompanyAssets />
            </div>
            <div class="col-md-2 col-sm-2">{/* sidebar */}</div>
          </div>
        </div>
        {/* <section class='footer'>
      <Footer />  
      </section> */}
      </div>
    </>
  );
}

export default AssetList;
