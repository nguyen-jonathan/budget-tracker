import React, {useContext, useState} from 'react';
import {AppContext} from '../../context/AppContext';
import EditBudget from '../EditBudget/EditBudget';
import ViewBudget from '../ViewBudget/ViewBudget';

const Budget = () => {
  const {budget, dispatch} = useContext(AppContext);
  const [edit, setEdit] = useState(false);

  const handleEditButton = () => {
    setEdit(true);
    // <EditBudget />;
  };

  const handleSaveButton = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value,
    });
    setEdit(false);
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {/* <span>Budget: ${budget}</span> */}
      {edit ? (
        <EditBudget handleSaveButton={handleSaveButton} budget={budget} />
      ) : (
        <ViewBudget handleEditButton={handleEditButton} budget={budget} />
      )}

      {/* <button
        type="edit"
        className="btn btn-primary"
        onClick={handleEditButton}>
        Edit
      </button> */}
    </div>
  );
};

export default Budget;
