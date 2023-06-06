import React, { useContext } from "react";
import { ImBin } from "react-icons/im";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="mr-3 listItem">£{props.amount}</span>
        <ImBin size="1.2em" onClick={handleDeleteExpense}></ImBin>
      </div>
    </li>
  );
};

export default ExpenseItem;
