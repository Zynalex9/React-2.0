import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
export const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);
  const { id, name, price, image } = product;
  const { addToCart, cartList, removeFromCart } = useCart();
  useEffect(() => {
    const checkIsInCard = cartList.find((item) => item.id === product.id);
    if (checkIsInCard) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, id]);
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {inCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
