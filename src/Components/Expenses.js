import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ChartData from "./Chart/ChartData";

const Expenses = ({ expensesData }) => {
  return (
    <div className="expenses">
      <ChartData />
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
