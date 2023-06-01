import React, { useContext } from "react";
import { ImBin } from "react-icons/im";
<<<<<<< HEAD
=======
import { BsFillTrashFill } from "react-icons/bs";
>>>>>>> 299b5d8e6c688d1e0c06e1a21a49de3e238b1d04
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
        <span className="badge badge-dark mr-3">£{props.amount}</span>
        <ImBin size="1.2em" onClick={handleDeleteExpense}></ImBin>
      </div>
    </li>
  );
};

export default ExpenseItem;
