import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Cart';
import useCart from "../custom_hooks/useCart"


function Cart() {
    const cart = useContext(CartContext)
    const cartArr = cart.cart
    // console.log(cartArr)
    const thisCart = useCart()

    //  esempio di una funzione  arrow autochiamante
    // (() => (cart.map((product, id) => { 

    // })))()

    const total = cartArr.map(product => product.price * product.quantity).reduce((result, price) => result + price, 0)

    // console.log(total)

    return (
        <div className="card mb-4" style={{ marginTop: 80 }}>
            <div className="card-header py-3">
                <h5 className="mb-0">Cart</h5>
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {cartArr.map((product) => (
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
                <button type="button" className="btn btn-outline-primary " onClick={() => { thisCart.checkOut() }}> Go to checkout </button>
                <button type="button" className="btn btn-outline-secondary m-1" onClick={() => { thisCart.emptyCart() }}> Empty cart </button>
            </div>
        </div>
    )
}
export default Cart

