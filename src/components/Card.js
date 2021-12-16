import useCart from "../custom_hooks/useCart"
import { useState, useContext } from 'react';
import { CartContext } from '../context/Cart';
import { Link } from 'react-router-dom'


function Card({ data }) {

    const cart = useContext(CartContext)
    const cartArr = cart.cart
    // spostare quantity in cart context 
    const [quantity, setQuantity] = useState(null)
    const thisCart = useCart()
    const isOnCart = cartArr.filter(cart => cart.id === data.id)[0]

    const decrement = () => {
        if (quantity === 0) {
            console.log("Siamo spiacenti, disponibilita' prodotto esaurita_dec")
        } else {
            thisCart.updateCart(data.id, quantity - 1)
            setQuantity(quantity - 1)
        }
    }

    const increment = () => {
        if (isOnCart) {
            setQuantity(quantity + 1)
            thisCart.updateCart(data.id, quantity + 1)
        }
        else if (data.available - quantity == 0) {
            console.log("Siamo spiacenti, disponibilita' prodotto esaurita_inc")
        } else {
            thisCart.addToCart(data.id, 1)
            setQuantity(quantity + 1)
        }
    }

    const localQty = data.available - quantity

    return (
        <>
            <div className="card m-1" style={{ width: 286 }} >
                <img className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title"> {data.name}</h5>
                    <p className="card-title">id: {data.id} € </p>
                    <p className="card-title">Price: {data.price} € </p>
                    {localQty <= 0
                        ?
                        <>
                            <div>
                                <p className="card-title">Availability: 0</p>
                                <small style={{ color: `#dc143c` }}>attention! no availability </small>
                            </div>
                        </>
                        :
                        <p className="card-title">Availability: {data.available - (quantity ? quantity : 0)}</p>
                    }
                    <div>
                        <button className="btn btn-outline-primary btn-sm m-1" onClick={increment}> + cart</button>
                        <button className="btn btn-outline-danger btn-sm " onClick={decrement}> - cart</button>
                        <Link to={`/product/${data.id}`}><button className="btn btn-outline-secondary btn-sm m-1">Details </button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card

