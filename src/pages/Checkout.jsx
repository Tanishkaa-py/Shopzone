import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>

      {cart.map(item => (
        <p key={item.id}>
          {item.title} x {item.quantity}
        </p>
      ))}

      <p>🎉 Thank you for your order</p>
    </div>
  );
};

export default Checkout;