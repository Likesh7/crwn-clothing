import React from "react";
import "./cart-icon.styles.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CartDropdown } from "components";
import { toggleCartDropdown } from "redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "assets/images/shopping-bag.svg";

const CartIcon = props => {
  let viewCart = props.showCartDropdown && <CartDropdown />;

  return (
    <div className="cart-icon" onClick={props.toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
      {viewCart}
    </div>
  );
};

CartIcon.propTypes = {
  showCartDropdown: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  showCartDropdown: state.cart.showCartDropdown
});

export default connect(
  mapStateToProps,
  { toggleCartDropdown }
)(CartIcon);
