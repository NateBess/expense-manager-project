import React from "react";
import "./ExpenseAmount.css";

function ExpenseAmount() {
  return (
    <div className="expense-amount-component">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input
          type="number"
          id="expense-amount"
          className="form-control edit-amout-box-style"
          placeholder="0.00"
          step=".01"
          aria-label="Amount (to the nearest dollar)"
          autoComplete="off"
        ></input>
        <div className="input-group-append"></div>
      </div>
    </div>
  );
}

export default ExpenseAmount;
