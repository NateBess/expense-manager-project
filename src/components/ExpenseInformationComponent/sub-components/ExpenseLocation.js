import React from "react";
import "./ExpenseLocation.css";

function ExpenseLocation() {
  return (
    <div className="expense-component expense-location-component">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Location
          </span>
        </div>
        <input
          type="text"
          id="expense-location"
          className="form-control"
          placeholder="Location..."
          aria-label="UserDescription"
          aria-describedby="basic-addon1"
          autoComplete="off"
        ></input>
      </div>
    </div>
  );
}

export default ExpenseLocation;
