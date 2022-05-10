import React from  "react"
import "./AssetRequest.css"

function AssetRequest({}) {
  return(
    <tbody>
    <tr>
      <td>asset-type</td>
      <td>request_type</td>
      <td>sender</td>
      <td>quantity</td>
      <td>urgency</td>
      <td>status</td>
    </tr>
  </tbody>
  );
}

export default AssetRequest;