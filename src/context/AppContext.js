import React, { createContext, useReducer } from "react";

//4th step: return state depending on the action
const AppReducer = (state, action) => {
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
    default:
      return state;
  }
};

//1st part: Initial state
const initialState = {
  budget: 1500,
  expenses: [
    { id: 12, name: "shopping", amount: 50 },
    { id: 11, name: "insurance", amount: 100 },
    { id: 10, name: "groceries", amount: 150 },
  ],
};

//2nd part: App context
export const AppContext = createContext();

//3rd part: Create a provider
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
