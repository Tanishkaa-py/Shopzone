import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  if (!cart.length) return <h2>Cart is empty</h2>;

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <img src={item.thumbnail} width={80} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <p>Qty: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
{cart.map(item => (
  <div key={item.id}>...</div>
))}

export default Cart;
 

 