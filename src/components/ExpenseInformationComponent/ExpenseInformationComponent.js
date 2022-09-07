import React from "react";
import "./ExpenseInformationComponent.css";
import ExpenseAmount from "./sub-components/ExpenseAmount";
import ExpenseDate from "./sub-components/ExpenseDate";
import ExpenseDescription from "./sub-components/ExpenseDescription";
import ExpenseLocation from "./sub-components/ExpenseLocation";
import "./sub-components/ExpenseSubComponentStyles.css";

function ItemTemplateComponent() {
  return (
    <div className="item-template-component">
      <div className="card">
        <div className="card-header">Expense Information</div>
        <div className="card-body">
          <div className="expense-item-inputs-container">
            <ExpenseDate />
            <ExpenseAmount />
          </div>
          <div className="expense-item-inputs-container">
            <ExpenseLocation />
          </div>
          <div className="expense-item-inputs-container">
            <ExpenseDescription />
          </div>
        </div>
      </div>
      <button id="add-expense-button" href="#" className="btn btn-primary">
        Add Expense
      </button>
    </div>
  );
}

export default ItemTemplateComponent;
