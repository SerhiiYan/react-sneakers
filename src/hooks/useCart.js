import { useContext } from "react";
import { AppContext } from "../App";



export const useCart = () => {
  const {cartItems} = useContext(AppContext)
  const totalPrice = cartItems.reduce((sum, obj) => +obj.price + sum, 0)
  const tax = (totalPrice / 100 * 5).toFixed(2) 
  
  return {price: totalPrice, cart: cartItems, tax: tax}
} 