import { useState, useEffect, createContext } from "react";
import api from "../util/api"

export const CartContext = createContext()

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [list, setList] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  /* creare funzione updateCart (refresha carrello)
    - chiamare appena avviata app
    - chiamare quando 
  */

  const getCart = (async () => {
    try {
      const res = await api.getCart()
      // console.log(res)
      setCart(res.data.products)
    } catch (err) {
      console.warn(err)
    } finally {
      setLoading(false)
    }
  })

  // primo rendering
  useEffect(() => {
    getCart()
  }, [])

  return (
    <CartContext.Provider value={{ list, user, cart, getCart: getCart, setUser: setUser, setList: setList }}>
      {children}
    </CartContext.Provider>
  )
}


