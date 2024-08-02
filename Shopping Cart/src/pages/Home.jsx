import React from "react";
import ProductCard from "../components/ProductCard"; // Ensure this import is correct

function Home({ products, setProducts, cardItems, setCardItems }) {
  return (
    <div className="flex items-center justify-around gap-4 flex-wrap my-4">
      {products.map((product, idx) => (
        <ProductCard
          key={product.id} // Use product.id for the key
          product={product} // Pass the product object here
          setProducts={setProducts}
          cardItems={cardItems}
          setCardItems={setCardItems}
        />
      ))}
    </div>
  );
}

export default Home;