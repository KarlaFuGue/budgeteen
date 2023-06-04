import React, { useContext, useState } from "react";
import BalanceButton from "./BalanceButton";
import BalanceInput from "./BalanceInput";
import { AppContext } from "../context/AppContext";

const Balance = () => {
  const { balance, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BALANCE",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="alert alert-secondary">
      {isEditing ? (
        <BalanceInput handleSaveClick={handleSaveClick} balance={balance} />
      ) : (
        <BalanceButton handleEditClick={handleEditClick} balance={balance} />
      )}
    </div>
  );
};

// function DDD() {
//   const [value, setValue] = useState("");
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={value} onChange={handleChange} />
//       <div>`£ {value}`</div>
//     </div>
//   );
// }

export default Balance;
