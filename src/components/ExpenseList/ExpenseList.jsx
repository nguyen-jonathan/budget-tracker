import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseList = () => {
  // hard code //
  const expenses = [
    {id: 123, name: 'Shopping', amount: 50},
    {id: 123, name: 'Gas', amount: 70},
    {id: 123, name: 'Bills', amount: 200},
    {id: 123, name: 'Car Rental', amount: 350},
  ];
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          name={expense.name}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
