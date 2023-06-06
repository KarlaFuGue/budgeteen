import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, balance } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  const alertType = totalExpenses > balance ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType} remainingTXT`}>
      <span>Remaining: £{balance - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
