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

  const filterChangeHandler = filteredYear => {
    setFilteredYear(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  )
}

export default Expenses;