import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

/**
 * Unordered list component that maps provided expense data into ExpenseItem components.
 * @param props provides .items, an array of expenses data
 * @returns {JSX.Element} list of ExpenseItem components or h2 feedback in case the expenses array is empty
 * @constructor
 */
const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  )
}

export default ExpensesList