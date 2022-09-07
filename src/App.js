import { useEffect, useState } from "react";
import "./App.css";
import ExpenseInformationComponent from "./components/ExpenseInformationComponent/ExpenseInformationComponent.js";
import ExpenseLog from "./components/ExpenseLog/ExpenseLog";

const getElement = (id) => document.getElementById(id);
const getValue = (id) => document.getElementById(id).value;

const dateValue = () => getValue("expense-date");
const amountValue = () => parseFloat(getValue("expense-amount")).toFixed(2);
const locationValue = () => getValue("expense-location");
const descriptionValue = () => getValue("expense-description");

function App() {
  const [entriesArray, setEntriesArray] = useState([]);
  const [uniqueID, setUniqueID] = useState(Math.random());

  const clearValues = () => {
    const expenseDate = getElement("expense-date");
    const expenseAmount = getElement("expense-amount");
    const expenseLocation = getElement("expense-location");
    const expenseDescription = getElement("expense-description");
    expenseDate.value = "";
    expenseAmount.value = "";
    expenseLocation.value = "";
    expenseDescription.value = "";
  };

  const addExpenseItem = (uniqueID, entriesArray) => {
    if (dateValue() !== "" && amountValue() !== "" && locationValue() !== "") {
      setUniqueID(Math.random());
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

  const addDeleteEvents = () => {
    const deleteArray = document.querySelectorAll(".delete-option");
    for (let i = 0; i < deleteArray.length; i++) {
      const elementID = deleteArray[i].id.replace("entry-", "");
      const deleteButton = getElement(`delete-${elementID}`);
      deleteButton.addEventListener("click", (event) => {
        const deleteThis = getElement(`entry-${elementID}`);
        const newEntriesArray = [];
        Array.from(entriesArray).filter((entry) => {
          if (entry.entryID !== parseFloat(elementID)) {
            newEntriesArray.push(entry);
          }
        });
        setEntriesArray(newEntriesArray);
      });
    }
    return deleteArray;
  };

  const doEntriesExist = () => {
    if (entriesArray.length > 0) return true;
  };

  useEffect(() => {
    const buttonAddExpense = document.getElementById("add-expense-button");
    buttonAddExpense.onclick = () => {
      addExpenseItem(uniqueID, entriesArray);
      clearValues();
    };
    addDeleteEvents();
  });

  return (
    <div className="App style-edits">
      <h1>Nate's Expense Manager</h1>
      <ExpenseInformationComponent />
      <ExpenseLog entriesArray={entriesArray} entriesExist={doEntriesExist()} />
    </div>
  );
}

export default App;
