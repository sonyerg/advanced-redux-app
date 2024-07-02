import React from "react";

import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const onClick = () => {
    dispatch(cartActions.isOpen());
  };

  return (
    <button onClick={onClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
