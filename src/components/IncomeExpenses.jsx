import React,{useContext} from 'react'
import {ExpenseContext} from "../context/ExpenseContext"

const IncomeExpenses = () => {

  const {transactions}=useContext(ExpenseContext)
  const costs=transactions.map((transaction) => transaction.cost)

  const income = costs
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

    const expense = costs
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">${expense}</p>
        </div>
      </div>
  )
}

export default IncomeExpenses
