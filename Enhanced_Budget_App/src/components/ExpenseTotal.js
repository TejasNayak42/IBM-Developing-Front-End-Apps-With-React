import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses, Currency, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  useEffect(() => {
    if (totalExpenses > budget) {
      alert("You cannot reduce the budget value lower than the spending!");
    }
  }, [totalExpenses, budget]);

  return (
    <div className="alert alert-primary">
      <span>
        Spent so far: {Currency} {totalExpenses}
      </span>
    </div>
  );
};

export default ExpenseTotal;
