import React from "react";

function ExpenseDate() {
  return (
    <div className="expense-component expense-date-component">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Date
          </span>
        </div>
        <input
          type="date"
          id="expense-date"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          autoComplete="off"
        ></input>
      </div>
    </div>
  );
}

export default ExpenseDate;
