// import React from "react";
import React, { useState } from "react";
// const BalanceButton = (props) => {
//   return (
//     <>
//       <span>Balance: £{props.budget}</span>
//       <button
//         type="button"
//         className="btn btn-primary button-margin"
//         onClick={props.handleEditClick}
//       >
//         Edit
//       </button>
//     </>
//   );
// };

function BalanceButton() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div class="budget-input">
      <input
        class="input-size"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="What is your budget?"
      />
      <div class="input-value">{value !== "" ? `£${value}` : ""}</div>
    </div>
  );
}
export default BalanceButton;
