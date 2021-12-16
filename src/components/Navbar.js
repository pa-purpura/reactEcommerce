import useCart from "../custom_hooks/useCart"
import { useState, useContext, useRef } from 'react';
import { CartContext } from '../context/Cart';
import { Link } from 'react-router-dom'

function Navbar() {

    const cart = useContext(CartContext)
    const thisUser = useCart()
    const user = cart.user
    // cart.getUser()
    const mail = useRef();
    const password = useRef();

    const tryAuth = () => {
        thisUser.getUser(mail.current.value, password.current.value)
        // console.log(mail.current.value, password.current.value)
    }

    // console.log()

    return (
        <nav className="navbar navbar-light  " style={{ backgroundColor: ' #e3f2fd' }}>

            <ul className="nav justify-content-start">
                <li className="nav-item">
                    <Link to={'/'}><a className="nav-link" >Home</a></Link>
                </li >

            </ul >
            {user.name
                ?
                <div>
                    welcome <span><b>{user.name}</b></span>
                </div>
                :
                <div className="d-flex flex-row justify-content-end  ">
                    <input className=" m-1" ref={mail} type="mail" placeholder=" your mail" style={{ borderRadius: 4 }} />
                    <input className=" m-1" ref={password} type="password" placeholder=" password" style={{ borderRadius: 4 }} />
                    <button className="btn btn-sm btn-outline-info m-1" onClick={tryAuth} type="submit">Sign-in</button>
                </div>
            }
        </nav >
    )
}

export default Navbar
