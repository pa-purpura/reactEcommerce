import { useContext } from 'react';
import { CartContext } from '../context/Cart';
import useCart from "../custom_hooks/useCart";
import { useLocation } from 'react-router-dom';



export default function Checkout() {

    const cart = useContext(CartContext)
    // const cartArr = cart.list
    // const thisCart = useCart()

    const location = useLocation()
    const { state = [] } = location
    const total = state ? state.map(product => product.price * product.quantity).reduce((result, price) => result + price, 0) : 0


    const user = cart.user

    return (
        <>
            <div>
                <h2 >
                    Ok <span style={{ color: `#008b8b` }}>{user.name}</span>, your order has been delivered, thank'U!
                </h2>
                <h4>here is a small summary of your order</h4>
                <ul className="list-group list-group-flush">
                    {state?.map((product) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            qt.{product.quantity} of {product.name}
                            <span>$ {product.price * product.quantity} </span>
                        </li>
                    ))}
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                    </li>
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                            <strong>Total amount</strong>
                        </div>
                        <span><strong>$ {total}</strong></span>
                    </li>
                </ul>
                <h4>we hope to see u' soon :)</h4>
            </div>
        </>
    )
}

