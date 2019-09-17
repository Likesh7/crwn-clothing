import React from "react";
import "./checkout.styles.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CheckoutItem } from "components";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectTotalPrice } from "redux/cart/cart.selectors";

const Checkout = ({ cartItems, totalPrice }) => {
  const cartItemsList = cartItems.map(cartItem => {
    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
  });

  return (
    <div className="checkout-page">
      <div className="checkout-page__header">
        <div className="header-block">product</div>
        <div className="header-block">description</div>
        <div className="header-block">quantity</div>
        <div className="header-block">price</div>
        <div className="header-block">remove</div>
      </div>
      {cartItemsList}
      <div className="checkout-page__total">
        <span>total: ${totalPrice}</span>
      </div>
    </div>
  );
};

// Checkout.propTypes = {
//   cartItems: PropTypes.array.isRequired
// };

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice
});

export default connect(mapStateToProps)(Checkout);
