import React from "react";
import ExpanseDate from "./ExpanseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div className="expense-item-price">
          ${Number(props.amount).toLocaleString()}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
