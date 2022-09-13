import React, {useContext, useState} from 'react';
import {AppContext} from '../../context/AppContext';
import EditBudget from '../EditBudget/EditBudget';

const Budget = () => {
  const {budget} = useContext(AppContext);
  const [edit, setEdit] = useState(false);

  const handleEditButton = () => {
    setEdit(true);
    <EditBudget />;
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <span>Budget: ${budget}</span>

      <button
        type="edit"
        className="btn btn-primary"
        onClick={handleEditButton}>
        Edit
      </button>
    </div>
  );
};

export default Budget;
