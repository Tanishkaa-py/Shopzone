import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";

import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar visible everywhere */}
      <Navbar />

      <Routes>
        {/* Level 1 */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Level 2 */}
        <Route path="/cart" element={<Cart />} />

        {/* Level 3 */}
        <Route path="/login" element={<Login />} />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;