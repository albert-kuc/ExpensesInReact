import React, {useState} from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

/**
 * Provides UI to input new expense data.
 * Changes appearance from the single Add New Expense button, which once clicked is replaced by the form to input new data.
 * On submission or cancellation the form disappears.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const NewExpense = (props) => {

  /**
   * The isEditing state defines to either display button or ExpenseForm component.
   */
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Updates provided new expenses data with random id.
   * Calls parent props function with modified expenses data.
   * @param enteredExpenseData
   */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}/>
      )}
    </div>
  );
};

export default NewExpense;