import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="product-card">
      <img src={product.thumbnail} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  )
}

export default ProductCard