import React from "react";
import "./ExpenseDescription.css";

function ExpenseDescription() {
  return (
    <div className="expense-component expense-type-component">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Description
          </span>
        </div>
        <input
          type="text"
          id="expense-description"
          className="form-control"
          placeholder="What was the expense? (Optional)"
          aria-label="UserDescription"
          aria-describedby="basic-addon1"
          autoComplete="off"
        ></input>
      </div>
    </div>
  );
}

export default ExpenseDescription;
