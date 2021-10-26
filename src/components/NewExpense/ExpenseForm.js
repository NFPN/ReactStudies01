import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  //   const titleChangeHandler = (event) => {
  //     //this approach could get previous outdate states
  //     // setUserInput({
  //     //   ...userInput,
  //     //   title: event.target.value,
  //     // });

  //     //this approach always get an updated state
  //     setUserInput((prevState) => {
  //       return { ...prevState, title: event.target.value };
  //     });
  //   };
  //   const amountChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, title: event.target.value };
  //     });
  //   };
  //   const dateChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, title: event.target.value };
  //     });
  //   };

  const [title, setTitle] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
          title: title,
          amount: amount,
          date: new Date(date),
      }
      
      props.onSaveExpenseData(expenseData);
      setTitle('');
      setAmount('');
      setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2021-11-01"
            max="2030-12-31"
            value={date}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
