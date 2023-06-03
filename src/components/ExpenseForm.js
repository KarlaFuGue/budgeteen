import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const ExpenseForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault(); //stop the page reloading when the button is clicked

    const expense = {
      id: uuidv4(),
      name,
      amount: parseInt(amount),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="amount">Amount</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          ></input>
        </div>
        <div className="col-sm mt-4">
          <button type="submit" className="btn btn-dark">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
