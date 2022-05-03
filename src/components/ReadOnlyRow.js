import React from "react";

const ReadOnlyRow = ({ Asset, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{Asset.Asset}</td>
      <td>{Asset.Category}</td>
      <td>{Asset.quantity}</td>
    
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, Asset)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(Asset.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;