import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from './AppReducer'

const initialState = {
  transaction: []
}

export const Context = createContext(initialState);

export const UseGlogbalState = () => 
{
  return useContext(Context)
   
}

export const GlobalProvider = ({ children }) => {

   const addTransactions =(transaction)=>{
    dispatch({
      type: "ADD-TRANSACTION",
      payload: transaction
    })
  }

  const deleteTransaction =(id)=>{
    dispatch({
      type: "DELETE-TRANSACTION",
      payload: id
    })
  }

  const [state, dispatch] = useReducer(AppReducer,initialState, () =>{
    const localData = localStorage.getItem('transaction')
    
    return localData ? JSON.parse(localData) : initialState
  })

  useEffect(()=>{
    localStorage.setItem('transaction',JSON.stringify(state))
  },[state])

  return(
  <Context.Provider value={{
    transactions: state.transaction,
    addTransactions,
    deleteTransaction
  }}>{children}</Context.Provider>);
};
