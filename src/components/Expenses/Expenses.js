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
        key={expense.id}
      />
    );
  });

  const filter = (payload) => {
    console.log(payload);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilter={filter} />
        {expenseList}
      </Card>
    </div>
  );
};

export default Expenses;
