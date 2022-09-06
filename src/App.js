import { useEffect, useState } from "react";
import "./App.css";
import ExpenseInformationComponent from "./components/ExpenseInformationComponent/ExpenseInformationComponent.js";
import ExpenseLog from "./components/ExpenseLog/ExpenseLog";

function App() {
  const [entriesArray, setEntriesArray] = useState([]);
  const [uniqueID, setUniqueID] = useState(0);

  const getElement = (id) => document.getElementById(id);

  const dateValue = () => getElement("expense-date").value;
  const amountValue = () => getElement("expense-amount").value;
  const locationValue = () => getElement("expense-location").value;
  const descriptionValue = () => getElement("expense-description").value;

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
