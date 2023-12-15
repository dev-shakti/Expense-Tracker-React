export const ExpenseReducer = (state, action) => {
     switch (action.type) {
          case "ADD_TRANSACTIONS":
               return {
                    ...state,
                    transactions: [...state.transactions, action.payload]
               }
          case "DELETE_TRANSACTIONS":
               return {
                    ...state,
                    transactions:state.transactions.filter((t) => t.id!==action.payload)
               }
     }
     return state;
}