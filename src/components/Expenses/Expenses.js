import React, {useState} from 'react';

import Card from "../UI/Card"
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css"

/**
 * Card expense component with year filter and expense elements.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021')

  /**
   * Function triggered by onFilterChange event.
   * Calls setFilteredYear state function to update filteredYear parameter.
   * It's passed to the child component (ExpensesFilter), where it gets executed.
   * @param newFilteredYear string value passed by child component during the event handling
   */
  const filterChangeHandler = newFilteredYear => {
    setFilteredYear(newFilteredYear);
  };

  const expensesFilteredByYear = props.items.filter(expense =>
    expense.date.getFullYear().toString() === filteredYear)

  /**
   * Uses Card as a container component instead of div to apply certain styling to Expenses or ExpenseItem
   * passes "expenses" parameter to alongside "card" style
   */
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={expensesFilteredByYear}/>
        <ExpensesList items={expensesFilteredByYear}/>
      </Card>
    </div>
  )
}

export default Expenses;