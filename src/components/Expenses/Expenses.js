import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  let expenseList = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return (
    <div>
      <ExpensesFilter />
      <Card className="expenses">{expenseList}</Card>
    </div>
  );
};

export default Expenses;
