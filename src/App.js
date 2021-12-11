import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router';
import Home from './pages/Home';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home/>}
        />

        <Route
          path="/product/:id"
          element={<Product/>}
        />

        <Route
          path="*"
          element={<NotFound/>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
