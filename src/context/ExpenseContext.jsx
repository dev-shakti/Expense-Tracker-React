import { useEffect, useReducer } from "react";
import { createContext, useContext } from "react";
import { ExpenseReducer } from "./ExpenseReducer";


const initialState = {
    transactions: JSON.parse(localStorage.getItem("list")) || []
}

export const ExpenseContext=createContext();

export const ExpenseContextProvider = ({children}) => {

    const [state,dispatch]=useReducer(ExpenseReducer,initialState)

    const addTransaction = (transaction) => {
        dispatch({
            type:"ADD_TRANSACTIONS",
            payload:transaction
        })
    }

    const deleteTransaction = (id) => {
        dispatch({
            type:"DELETE_TRANSACTIONS",
            payload:id
        })
    }

    useEffect(() => {
       localStorage.setItem("list",JSON.stringify(state.transactions))
    },[state.transactions])
   
    return <ExpenseContext.Provider value={{
        transactions:state.transactions,
        addTransaction,
        deleteTransaction
        }}>
        {children}
        </ExpenseContext.Provider>
}

// export const useExpenseContext = () => {
//     return  useContext(ExpenseContext)
// }