import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveHandler = (payload) => {
    const expenseData = { ...payload, id: Math.random().toString() };
    props.onSave(expenseData);
    setIsEditing(false);
  };
  const [isEditing, setIsEditing] = useState(false);
  const startIsEditing = () =>{
    setIsEditing(true);
  }
  const endIsEditing = () =>{
    setIsEditing(false);
  }
  let newExpenseContent = (
    <button onClick={startIsEditing}>Add New Expense</button>
  );

  return <div className="new-expense">
      {!isEditing && newExpenseContent}
      {isEditing && <ExpenseForm onSave={saveHandler} onCancel={endIsEditing}/>}
      
      </div>;
};

export default NewExpense;
