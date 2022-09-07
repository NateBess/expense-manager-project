import React from "react";
import "./ExpenseLog.css";
import ExpenseEntry from "./sub-components/ExpenseEntry";

function ExpenseLog({ entriesArray, entriesExist }) {
  if (entriesExist) {
    return (
      <table className="expense-log-container">
        <thead className="expense-columns">
          <tr className="expense-heading-container">
            <th className="date-column heading">Date</th>
            <th className="description-column heading">Description</th>
            <th className="location-column heading">Location</th>
            <th className="amount-column heading">Amount</th>
          </tr>
        </thead>
        <tbody>
          {entriesArray.map((entry) => {
            return (
              <ExpenseEntry
                key={entry.entryID}
                uniqueID={entry.entryID}
                date={entry.date}
                description={entry.description}
                location={entry.location}
                amount={entry.amount}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ExpenseLog;
