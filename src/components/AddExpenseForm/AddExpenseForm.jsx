import React, {useContext, useState} from 'react';
import {AppContext} from '../../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm = () => {
  const {dispatch} = useContext(AppContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      amount: parseInt(amount),
    };
    // reducer
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
