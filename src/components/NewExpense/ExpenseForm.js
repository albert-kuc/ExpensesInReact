import React, { useState } from "react";

import './ExpenseForm.css'

/**
 * Displays UI to provide new expense title, amount and date.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  /**
   * Prevents page default behaviour to refresh on submit.
   * Builds expense data array from input and passes to parent props function.
   * @param event
   */
  const submitHandler = (event) => {
    // Prevents page refresh
    event.preventDefault();

    // Builds expense data array
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type='date'
            min='2001-01-01'
            max='2025-12-31'
            value={enteredDate}
            onChange={dateChangeHandler} />
        </div>
        <div className='new-expense__actions'>
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm