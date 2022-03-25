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
   * Calls setFilteredYear state function to update filteredYear parameter.
   * Function is passed to the child component (ExpensesFilter), where it is executed.
   * @param newFilteredYear string value passed by child component during the event handling
   */
  const filterChangeHandler = newFilteredYear => {
    setFilteredYear(newFilteredYear);
  };

  const expensesFilteredByYear = props.items.filter(expense =>
    expense.date.getFullYear().toString() === filteredYear)

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