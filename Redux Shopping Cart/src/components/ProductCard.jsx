import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
useDispatch;
import "./ProductCard.css";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const { id, name, price, image } = product;
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartState.cartList);
  useEffect(() => {
    const checkInCart = cartList.find((item) => item.id === id);
    if (checkInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
