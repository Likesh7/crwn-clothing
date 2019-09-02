import React from "react";
import { CustomButton } from "components";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item">item</div>
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
