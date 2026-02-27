import { Link } from "react-router-dom";
import DarkToggle from "./DarkToggle";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar glass">
      <h2 className="logo">ShopZone</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>

        {/* ✅ clickable cart */}
        <Link to="/cart" className="cart">
          🛒
          {cart.length > 0 && <span className="badge">{cart.length}</span>}
        </Link>

        <DarkToggle />
      </div>
    </nav>
  );
}


export default Navbar;