import React, {useState} from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const openExpenseFormHandler = () => {
    setDisplayArea(formView)
  };
  const collapseExpenseFormHandler = () => {
    setDisplayArea(buttonView)
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const buttonView =
    <button type='button' onClick={openExpenseFormHandler}>Add New Expense</button>

  const formView =
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCollapseExpenseForm={collapseExpenseFormHandler}/>

  const [displayArea, setDisplayArea] = useState(buttonView);

  return (
    <div className="new-expense">
      {displayArea}
    </div>
  );
};

export default NewExpense;