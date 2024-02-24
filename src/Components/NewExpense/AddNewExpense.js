import React from "react";

const AddNewExpense = () => {
  return (
    <div>
      <form>
        <div>
          <div>
            <label>Title</label>
            <input />
          </div>
          <div>
            <label>Price</label>
            <input type="number" />
          </div>
          <div>
            <label>Date</label>
            <input type="date" />
          </div>
        </div>
        <div>
          <button>Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewExpense;
