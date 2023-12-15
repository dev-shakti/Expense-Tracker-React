import React,{useContext} from 'react'
import {ExpenseContext} from "../context/ExpenseContext"

const Balance = () => {

  const {transactions}=useContext(ExpenseContext)
  const costs=transactions.map((transaction) => transaction.cost)
  const total=costs.reduce((acc,currVal) => {
    return acc+currVal
  },0)

  return (
    <>
    <h4>Your Balance</h4>
    <h1>${total}</h1>
    </>
  )
}

export default Balance
