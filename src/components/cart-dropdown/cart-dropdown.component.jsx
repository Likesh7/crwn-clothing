import React from "react";
import "./cart-dropdown.styles.scss";
import { withRouter } from "react-router-dom";
import { CustomButton, CartItems } from "components";

const CartDropdown = ({ history }) => {
  return (
    <div className="cart-dropdown">
      <CartItems />
      <CustomButton onClick={() => history.push("/checkout")}>
        go to checkout
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
