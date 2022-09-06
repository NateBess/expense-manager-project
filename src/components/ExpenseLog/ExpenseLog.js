import React from "react";
import "./ExpenseLog.css";
import ExpenseEntry from "./sub-components/ExpenseEntry";

function ExpenseLog({ entriesArray }) {
  if (entriesArray.length === 0) {
    return (
      <table className="expense-log-container-empty">
        <tbody>
          <tr>
            <td>Entries will show up here...</td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return (
      <table className="expense-log-container">
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
