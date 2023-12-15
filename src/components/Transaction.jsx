import React,{useContext} from 'react'
import {ExpenseContext} from "../context/ExpenseContext"

const Transaction = ({ transaction }) => {

    const {deleteTransaction}=useContext(ExpenseContext)
    const sign=transaction.cost<0 ? "-" : "+"

    
    return (
        <li className={transaction.cost < 0 ? 'minus' : 'plus'}>
            {transaction.name}
            <span>{sign}${Math.abs(transaction.cost)}</span>
            <button onClick={() => deleteTransaction(transaction.id)}
                className="delete-btn">
                x
            </button>
        </li>
    )
}

export default Transaction
