import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"
const NewExpense = (props) => {
    const saveHandler = (payload) =>{
        const expenseData = {...payload, id: Math.random().toString()}
        props.onSave(expenseData);
    } 
    return (
        <div className="new-expense">
            <ExpenseForm onSave={saveHandler}/>
        </div>
    );
}

export default NewExpense;