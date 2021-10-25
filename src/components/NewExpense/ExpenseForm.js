import React from "react";

import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input type="text"></input>
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input type="date" min="2021-11-01" max="2030-12-31"></input>
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
