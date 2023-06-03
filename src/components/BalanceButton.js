import React from "react";

const BalanceButton = (props) => {
  return (
    <>
      <span>Balance: £{props.budget}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default BalanceButton;
