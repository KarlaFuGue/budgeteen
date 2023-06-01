import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Balance = () => {
  const { budget } = useContext(AppContext);
  return (
    <div className="alert alert-secondary">
      <span>Balance: £{budget}</span>
    </div>
  );
};

export default Balance;
