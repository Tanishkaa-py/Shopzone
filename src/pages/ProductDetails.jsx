import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <img src={product.thumbnail} width={300} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>

      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default ProductDetails;