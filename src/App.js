import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 942.12,
      date: new Date(2020, 3, 21),
    },
    {
      id: 'e3',
      title: 'New TV',
      amount: 799.99,
      date: new Date(2021, 1, 12),
    },
    {
      id: 'e4',
      title: 'Castle',
      amount: 999.99,
      date: new Date(2005, 11, 30),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
