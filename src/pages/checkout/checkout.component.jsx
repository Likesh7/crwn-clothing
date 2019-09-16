import React from "react";
import "./checkout.styles.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "redux/cart/cart.selectors";

const Checkout = ({ cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-page__header">
        <div className="header-block">product</div>
        <div className="header-block">description</div>
        <div className="header-block">quantity</div>
        <div className="header-block">price</div>
        <div className="header-block">remove</div>
      </div>

      {cartItems.map(cartItem => {
        console.log({ cartItem });
        return (
          <div key={cartItem.id} className="checkout-page__item">
            <div className="item-image">
              <img src={cartItem.imageUrl} />
            </div>
            <div className="item-description">{cartItem.name}</div>
            <div className="item-quantity">{cartItem.quantity}</div>
            <div className="item-price">{cartItem.price}</div>
            <button className="item-remove">x</button>
          </div>
        );
      })}
    </div>
  );
};

// Checkout.propTypes = {
//   cartItems: PropTypes.array.isRequired
// };

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(Checkout);
