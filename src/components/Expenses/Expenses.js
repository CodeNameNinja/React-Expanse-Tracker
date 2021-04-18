import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filter = (payload) => {
      setFilteredYear(payload);
  };
  const filteredExpenses = props.expenses.filter(items =>{
      return items.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilter={filter} filteredYear={filteredYear} />
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
