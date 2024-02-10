import ExpenseItem from "./Components/ExpenseItem";

const expensesData = [
  {
    id: 1,
    title: "New TV",
    price: 2500,
    date: new Date(2024, 2, 10),
  },
  {
    id: 2,
    title: "Education",
    price: 6500,
    date: new Date(2023, 9, 15),
  },
  {
    id: 3,
    title: "PC",
    price: 3200,
    date: new Date(2023, 5, 20),
  },
  {
    id: 4,
    title: "Voyage",
    price: 1999,
    date: new Date(2025, 7, 1),
  },
];

function App() {
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
}

export default App;
