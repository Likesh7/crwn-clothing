import React from "react";
import "./cart-dropdown.styles.scss";
import { CustomButton, CartItems } from "components";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <CartItems />
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
