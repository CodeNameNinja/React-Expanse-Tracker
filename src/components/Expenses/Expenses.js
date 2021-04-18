import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";

import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList"
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filter = (payload) => {
    setFilteredYear(payload);
  };
  const filteredExpenses = props.expenses.filter((items) => {
    return items.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilter={filter} filteredYear={filteredYear} />
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
