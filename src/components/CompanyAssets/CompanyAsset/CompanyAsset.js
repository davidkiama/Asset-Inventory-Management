import React from "react";

function CompanyAsset({ companyAsset }) {
  return (
    <tbody>
      <tr>
        <td>{companyAsset.asset_name}</td>
        <td>{companyAsset.description}</td>
        <td>{companyAsset.quantity}</td>
      </tr>
    </tbody>
  );
}

export default CompanyAsset;
