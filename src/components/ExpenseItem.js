import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>October 21th 2021</div>
      <div className="expense-item-description">
        <h2>Car Insurance</h2>
        <div className="expense-item-price">399.99</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
