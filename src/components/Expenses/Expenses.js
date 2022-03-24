import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"

/**
 * Displays all expense items and year filter.
 * Passes filteredYear to ExpensesFilter and updates filteredYear state by output from  ExpensesFilter.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  /**
   * Calls setFilteredYear state function to update filteredYear parameter.
   * The function is passed to child components (ExpensesFilter) where from it is executed.
   * @param newFilteredYear string value passed by child component during the event handling
   */
  const filterChangeHandler = newFilteredYear => {
    setFilteredYear(newFilteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {props.items.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses;