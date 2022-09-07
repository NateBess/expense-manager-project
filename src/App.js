import { useEffect, useState } from "react";
import "./App.css";
import ExpenseInformationComponent from "./components/ExpenseInformationComponent/ExpenseInformationComponent.js";
import ExpenseLog from "./components/ExpenseLog/ExpenseLog";

const getElement = (id) => document.getElementById(id);
const getValue = (id) => document.getElementById(id).value;

const expenseDate = getElement("expense-date");
const expenseAmount = getElement("expense-amount");
const expenseLocation = getElement("expense-location");
const expenseDescription = getElement("expense-description");

function App() {
  const [entriesArray, setEntriesArray] = useState([]);
  const [uniqueID, setUniqueID] = useState(0);

  const dateValue = () => getValue("expense-date");
  const amountValue = () => getValue("expense-amount");
  const locationValue = () => getValue("expense-location");
  const descriptionValue = () => getValue("expense-description");

  const clearValues = () => {
    expenseDate.value = "";
    expenseAmount.value = "";
    expenseLocation.value = "";
    expenseDescription.value = "";
  };

  const addDeleteEvents = () => {
    const deleteArray = document.querySelectorAll(".delete-option");
    for (let i = 0; i < deleteArray.length; i++) {
      const elementID = deleteArray[i].id.replace("entry-", "");
      const deleteButton = getElement(`delete-${elementID}`);
      deleteButton.addEventListener("click", (event) => {
        const deleteThis = getElement(`entry-${elementID}`);
        try {
          // added try catch to remove console warning in browser.
          deleteThis.remove();
        } catch {}
      });
    }
    return deleteArray;
  };

  const addExpenseItem = (uniqueID, entriesArray) => {
    if (dateValue() !== "" && amountValue() !== "" && locationValue() !== "") {
      setUniqueID(uniqueID + 1);
      // Puts expense information in to object.
      const expenseItem = {
        date: dateValue(),
        amount: amountValue(),
        location: locationValue(),
        description: descriptionValue(),
        entryID: uniqueID,
      };
      const newEntriesArray = [...entriesArray, expenseItem];
      setEntriesArray(newEntriesArray);
      clearValues();
    }
  };

  useEffect(() => {
    const buttonAddExpense = document.getElementById("add-expense-button");
    buttonAddExpense.onclick = () => {
      addExpenseItem(uniqueID, entriesArray);
    };
    addDeleteEvents();
  });

  return (
    <div className="App style-edits">
      <h1>Nate's Expense Manager</h1>
      <ExpenseInformationComponent />
      <div className="expense-heading-container">
        <span className="expense-columns">
          <div className="date-column heading">Date</div>
          <div className="description-column heading">Description</div>
          <div className="location-column heading">Location</div>
          <div className="amount-column heading">Amount</div>
        </span>
      </div>
      <ExpenseLog entriesArray={entriesArray} />
    </div>
  );
}

export default App;
