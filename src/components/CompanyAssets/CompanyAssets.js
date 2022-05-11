import React from "react";
import { useSelector } from "react-redux";

import CompanyAsset from "./CompanyAsset/CompanyAsset";

function CompanyAssets() {
  const companyAssets = useSelector((state) => state.assets);

  return (
    <table className="requests-table" class="table">
      <thead>
        <th>Asset Name</th>
        <th>Description</th>
        <th>Quantity</th>
      </thead>

      {companyAssets.map((companyAsset) => (
        <CompanyAsset key={companyAsset.id} companyAsset={companyAsset} />
      ))}
    </table>
  );
}

export default CompanyAssets;
