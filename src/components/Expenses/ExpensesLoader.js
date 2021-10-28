import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import "./ExpensesLoader.css";

function ExpenseLoader(props) {
  const [selectedYear, setExpensesyear] = useState("2021");

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

        {props.expenses
          .filter((e) => e.date.getFullYear().toString() === selectedYear)
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default ExpenseLoader;
