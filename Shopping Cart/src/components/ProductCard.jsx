import React from "react";
import headphones from "../assets/headphones.jpg";

function ProductCard({ product, cardItems, setCardItems }) {
  const addtoCart = () => {
    // Check if the product is already in the cart
    const isProductInCart = cardItems.find((item) => item.id === product.id);
    
    if (!isProductInCart) {
      // Add product to cardItems if it's not already there
      setCardItems((prevItems) => [...prevItems, product]);
      console.log("Added to cart:", product);
    } else {
      console.log("Product already in cart:", product);
    }
  };
  
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4"
    >
      <a href="#">
        <img className="rounded-t-lg" src={headphones} alt={product.name} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Price: ${product.price}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
        <span
          onClick={addtoCart}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
        >
          Add to Cart
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
