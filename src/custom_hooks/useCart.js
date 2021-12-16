import { useContext, useState } from 'react';
import { CartContext } from '../context/Cart';
import api from '../util/api';
import { useNavigate } from 'react-router-dom';


export default function useCart() {
    const [loading, setLoading] = useState(true)

    const cart = useContext(CartContext)
    const navigate = useNavigate()

    // const empty
    const updateCart = async (id, quantity) => {
        try {
            const data = { quantity: quantity }
            // console.log('i dati arrivano alla funzione', data)
            await api.updateCart(id, data)
            cart.getCart()
        } catch (err) {
            console.warn(err.response)
        } finally {
            setLoading(false)
        }
    }

    const addToCart = async (id, quantity) => {
        try {
            const data = { quantity: quantity }
            // console.log('i dati arrivano alla funzione', data)
            await api.addToCart(id, data)
            cart.getCart()
        } catch (err) {
            console.warn(err.response)
        } finally {
            setLoading(false)
        }
        // chimata await
        // updateCart
    }

    const emptyCart = async () => {
        try {

            // console.log('i dati arrivano alla funzione', data)
            await api.emptyCart()
            cart.getCart()
        } catch (err) {
            console.warn(err.response)
        } finally {
            setLoading(false)
        }
    }

    const checkOut = async () => {
        try {
            // console.log('i dati arrivano alla funzione', data)
            // cart.setList(cart.cart)
            await api.checkOut()
            navigate('/checkout', { state: [...cart.cart] })
            cart.getCart()
        } catch (err) {
            console.warn(err.response)
        } finally {
            setLoading(false)
        }
    }

    const getUser = async (email, password) => {
        try {
            const data = { email, password }
            const user = await api.getUser(data)
            cart.setUser(user.data)
        } catch (err) {
            console.warn(err.response)
        } finally {
            setLoading(false)
        }
    }

    return { getUser, addToCart, updateCart, emptyCart, checkOut, cart: cart.cart }

}