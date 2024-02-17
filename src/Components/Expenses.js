import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expensesData }) => {
  return (
    <div>
      {expensesData.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
            key={expense.id}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
