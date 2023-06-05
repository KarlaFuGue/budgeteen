import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpensesTotal = (props) => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  return (
    <div className="alert alert-warning">
      <span>Spent: £{totalExpenses}</span>
    </div>
  );
};

export default ExpensesTotal;
