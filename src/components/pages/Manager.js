import React, {  useState , Fragment} from "react";

import {nanoid} from "nanoid";
import './Manager.css';
import ReadOnlyRow from "../ReadOnlyRow";
import EditableRow from "../EditableRow";





// export default function manager() {
    



    
// }

const App = () => {

    const [Assets, setAssets] = useState();
    const [addFormData, setAddFormData] = useState({

        Asset:'',
        Category:'',
        quantity:'',
    }

    )

    const [editFormData, setEditFormData] = useState({
        Asset:'',
        Category:'',
        quantity:'',
    })

    const [editAssetId, setEditAssetId] = useState(null);



    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);

    };

    const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
      };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newAsset = {
            id:nanoid(),
            Asset: addFormData.Asset,
            Category: addFormData.Category,
            quantity:addFormData.quantity
        }
        

        const newAssets = [...Assets, newAsset];
        setAssets(newAssets);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedAsset = {
            id: editAssetId,
            Asset: editFormData.Asset,
            Category: editFormData.Category,
            quantity: editFormData.quantity,
            
          };

          const newAssets = [...Assets];
          const index = Assets.findIndex((Asset) => Asset.id === editAssetId);

    newAssets[index] = editedAsset;

    setAssets(newAssets);
    setEditAssetId(null);
  };

  const handleEditClick = (event, Asset) => {
    event.preventDefault();
    setEditAssetId(Asset.id);

    const formValues = {
      Asset: Asset.Asset,
      Category: Asset.Category,
      quantity: Asset.quantity,
     
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditAssetId(null);
  };

  const handleDeleteClick = (AssetId) => {
    const newAssets = [...Assets];

    const index = Assets.findIndex((Assets) => Assets.id === AssetId);

    newAssets.splice(index, 1);

    setAssets(newAssets);
  };


    return <div  className="app-container">

        <table>
            <thead>
                <tr>
                    <th>Asset Name</th>
                    <th>Category</th>
                    <th>Quantity </th>
                </tr>
            </thead>

            <thead>
                <tbody>
                <Fragment>
                {editAssetId === Assets.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    Asset={Assets}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
                    <tr>
                        <td>HP elite book</td>
                        <td>Laptop</td>
                        <td>12</td>
                    </tr>
                </tbody>
            </thead>
        </table>

        <h2>Add a New Asset</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input

                type="text"
                name="Asset"
                required="required"
                placeholder="Enter an asset name"
                onChange={handleAddFormChange}
                />

                <input
                type="text"
                name="Category"
                required="required"
                placeholder="Enter a category"
                onChange={handleAddFormChange}
                />

                <input
                type="integer"
                name="quantity"
                required="required"
                placeholder="Enter the quantity"
                onChange={handleAddFormChange}
                />

                <button type="submit">Add Asset</button>
            </form>
        

    </div>
}

export default App