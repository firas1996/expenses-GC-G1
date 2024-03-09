import { useState } from "react";
import "./AddNewExpense.css";

const AddNewExpense = () => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);
    setInputs({ title: event.target.value });
  };
  const priceChangeHandler = (event) => {
    // setPrice(event.target.value);
    setInputs({ title: event.target.value });
  };
  const dateChangeHandler = (event) => {
    // setDate(event.target.value);
    setInputs({ title: event.target.value });
  };
  const submitForm = (event) => {
    event.preventDefault();
    console.log(inputs);
    // console.log(title);
    // console.log(price);
    // console.log(date);
    // setTitle("");
    // setPrice("");
    // setDate("");
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitForm}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              value={inputs.title}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              required
              type="number"
              placeholder="Price"
              min="0"
              step="0.01"
              value={inputs.price}
              onChange={priceChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              required
              type="date"
              min="2022-01-01"
              max="2026-12-31"
              value={inputs.date}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button">Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewExpense;
