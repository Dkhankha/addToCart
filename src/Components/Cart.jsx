import { createContext, useReducer } from "react"
import "./Cart.css"
import ContextCart from "./ContextCart"
import { products } from './Products'

export const CartContext = createContext()
 
const initialState = {
  item:products,
  totalAmount:0,
  totalItem:0
}

const reducer = (state, action) => {
  return state;
}

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <CartContext.Provider value={{...state}}>
        <ContextCart />
      </CartContext.Provider>
    </>
  )
}

export default Cart