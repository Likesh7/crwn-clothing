import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { CheckoutItem, StripeButton } from "components";
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
      <span className="payment-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </span>
      <StripeButton price={totalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice
});

export default connect(mapStateToProps)(Checkout);
