import React, { useState } from "react";
import ExpanseDate from "./ExpanseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";


function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  let test = 'new value';
  const clickHandler = () => {
    setTitle(test);
  };

  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
