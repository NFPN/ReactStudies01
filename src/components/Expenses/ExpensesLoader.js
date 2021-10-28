import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import "./ExpensesLoader.css";

function ExpenseLoader(props) {
  const [selectedYear, setExpensesyear] = useState("2020");

  const filterChangedHandler = (yearData) => {
    setExpensesyear(yearData);
  };

  return (
    <div>
      <Card className="expenses-loader">
        <ExpensesFilter
          selected={selectedYear}
          onFilterChanged={filterChangedHandler}
        />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />

        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />

        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />

        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default ExpenseLoader;
