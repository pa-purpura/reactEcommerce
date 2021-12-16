import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router'
import Home from './pages/Home'
import CartProvider from './context/Cart';
import Cart from './components/Cart';
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';

function App() {
  return (
    // provider carrello
    <BrowserRouter>
      <CartProvider>
        <div className="container-fluid">
          <div className="row">
            <Navbar />
          </div>
        </div>
        <div className="container">
          <div className="row">

            <div className="col-md-3 ">
              <Cart />
            </div>
            <div className="col-md-9 mt-4">
              <Routes>

                <Route
                  path="/"
                  element={<Home />}
                />

                <Route
                  path="/checkout"
                  element={<Checkout />}
                />

                <Route
                  path="/product/:id"
                  element={<Product />}
                />

                <Route
                  path="*"
                  element={<NotFound />}
                />

              </Routes>
            </div>

          </div>
        </div>
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
