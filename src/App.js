import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bulma/css/bulma.min.css";
import "./App.css";
import Balance from "./components/Balance";
import Remaining from "./components/Remaining";
import ExpensesTotal from "./components/ExpensesTotal";
import ExpensesList from "./components/ExpensesList";
import ExpenseForm from "./components/ExpenseForm";
import NavBar from "./components/NavBar";
import { AppProvider } from "./context/AppContext";
import About from "./components/About";
import Section from "./components/Mortgage";
import Services from "./components/ServicesAndFooter";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <NavBar />
      </div>
      <div className="container">
        <About />
      </div>
      <div className="container">
        <h1 className="mt-3">My Expenses Tracker</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Balance />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpensesTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpensesList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense Transaction</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseForm />
          </div>
        </div>
      </div>
      <div className="container">
        <Section />
      </div>
      <div className="container">
        <Services />
      </div>
    </AppProvider>
  );
};

export default App;
