import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  /**
   * Calls setExpenses state function to add new expense element at the beginning of the expenses list.
   * The function is passed to child component (NewExpense) from where it is executed.
   * @param expense element passed by child component during the event handling
   */
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
