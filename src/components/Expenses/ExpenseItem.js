import React from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
import './ExpenseItem.css';

/**
 * List element representing a card component of individual expense data.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ExpenseItem = (props) => {

  /**
   * Uses Card as a container component instead of div to apply certain styling to Expenses or ExpenseItem
   */
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">£{props.amount}</div>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem;