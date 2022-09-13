import React, {useState} from 'react';

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <input
        type="number"
        required="required"
        className="form-control mr-3"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => props.handleSaveButton(value)}>
        Save
      </button>
    </>
  );
};

export default EditBudget;
