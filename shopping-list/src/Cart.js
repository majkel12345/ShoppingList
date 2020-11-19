import React from "react";
import "./Cart.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";

const Cart = () => {
  const [state, dispatch] = useStateValue();

  return (
    <div className="cart">
      <div className="cart__length">
        {state ? <h2>{state.length}</h2> : 0}
        <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default Cart;
