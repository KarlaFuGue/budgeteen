import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bulma/css/bulma.min.css";
import "./App.css";

import { AppProvider } from "./context/AppContext";
import Balance from "./components/Balance";
import ExpensesTotal from "./components/ExpensesTotal";
import ExpensesList from "./components/ExpensesList";
import ExpenseForm from "./components/ExpenseForm";
import Remaining from "./components/Remaining";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Section from "./components/Mortgage";
import Services from "./components/ServicesAndFooter";
import DoughnutJS from "./components/DoughnutChart";

const App = () => {
  return (
    <AppProvider>
      <div>
        <NavBar />
      </div>
      <div className="container-about">
        <About />
      </div>
      <div className="trackerCSS container is-fluid">
        <h1 className="mt-3 trackerHeading" id="Tracker">
          Expenses Tracker
        </h1>
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
        <div className="expenseList-padding">
          <h3 className="mt-3 expensesTXT">Expenses</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <ExpensesList />
            </div>
          </div>
        </div>
        <h3 className="mt-3 transactionTXT">Add Expense Transaction</h3>
        <div className="row mt-3">
          <div className="col-sm expenseForm-padding">
            <ExpenseForm />
          </div>
        </div>
      </div>
      <div className="container is-fluid">
        <DoughnutJS />
      </div>
      {/* <div className="container">
        <Section />
      </div> */}
      <div className="container is-fluid" id="Contact">
        <Services />
      </div>
    </AppProvider>
  );
};

export default App;
