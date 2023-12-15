import React, { useState,useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {ExpenseContext} from "../context/ExpenseContext"

const AddTransaction = () => {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const {addTransaction}=useContext(ExpenseContext)

  const handleSubmit = (e) => {
      e.preventDefault()

      const newTransaction={
        id:uuidv4(),
        name:name,
        cost:parseInt(cost)
      }
      
      addTransaction(newTransaction)

      setName('')
      setCost('')
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <button className="btn">
          Add transaction
        </button>
      </form>
    </>
  )
}

export default AddTransaction
