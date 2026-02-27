import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, padding: 20 }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;