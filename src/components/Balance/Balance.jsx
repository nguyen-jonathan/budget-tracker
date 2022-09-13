import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext';

const Balance = () => {
  const {expenses, budget} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.amount);
  }, 0);

  return (
    <div className="alert alert-success">
      <span>Balance: ${budget - totalExpenses}</span>
    </div>
  );
};

export default Balance;
