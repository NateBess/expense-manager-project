import React from "react";
import "./ExpenseEntry.css";

function ExpenseEntry({ uniqueID, date, description, location, amount }) {
  return (
    <tr id={`entry-${uniqueID}`} className="expense-columns delete-option">
      <td className="date-column column-background-color">{date}</td>
      <td className="description-column column-background-color">
        {description}
      </td>
      <td className="location-column column-background-color">{location}</td>
      <td className="amount-column column-background-color">${amount}</td>
      <td>
        <button
          className="delete-button"
          id={`delete-${uniqueID}`}
          type="submit"
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default ExpenseEntry;
