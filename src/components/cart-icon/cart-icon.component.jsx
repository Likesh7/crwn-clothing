import React from "react";
import "./cart-icon.styles.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CartDropdown } from "components";
import { toggleCartDropdown } from "redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "assets/images/shopping-bag.svg";
import { selectCartItemsCount } from "redux/cart/cart.selectors";

const CartIcon = ({ showCartDropdown, toggleCartDropdown, totalCartItems }) => {
  let viewCart = showCartDropdown && <CartDropdown />;

  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalCartItems}</span>
      {viewCart}
    </div>
  );
};

CartIcon.propTypes = {
  showCartDropdown: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  showCartDropdown: state.cart.showCartDropdown,
  totalCartItems: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  { toggleCartDropdown }
)(CartIcon);
