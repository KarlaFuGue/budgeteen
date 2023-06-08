import React from "react";
//import React, { useState } from "react";
const BalanceButton = (props) => {
  return (
    <>
      <span>Balance: £{props.balance}</span>
      <button
        type="button"
        className="button is-focused ml-6"
        onClick={props.handleEditClick}
      >
        Reset
      </button>
    </>
  );
};

export default BalanceButton;
