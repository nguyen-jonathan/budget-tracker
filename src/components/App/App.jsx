import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from '../Budget/Budget';
import Balance from '../Balance/Balance';
import Expense from '../Expense/Expense';

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">Budget Tracker</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Balance />
        </div>
        <div className="col-sm">
          <Expense />
        </div>
      </div>
    </div>
  );
};

export default App;
