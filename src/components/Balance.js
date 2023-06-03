import React, { useContext, useState } from "react";
import BalanceButton from "./BalanceButton";
import BalanceInput from "./BalanceInput";
import { AppContext } from "../context/AppContext";

const Balance = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="alert alert-secondary">
      {isEditing ? (
        <BalanceInput handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <BalanceButton handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Balance;
