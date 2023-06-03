import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

//5th step: return state depending on the action
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

//1st part: Initial state
const initialState = {
  budget: 1500,
  expenses: [
    { id: uuidv4(), name: "Fuel", amount: 120 },
    { id: uuidv4(), name: "Insurance", amount: 120 },
  ],
};

//2nd part: App context
export const AppContext = createContext();

//3rd part: Create a provider
export const AppProvider = (props) => {
  //4th part: return the state and the dispatch
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //5th part: Return context. Pass the values that we want to see
  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        balance: state.budget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
