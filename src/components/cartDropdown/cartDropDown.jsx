import React from "react";
import { connect } from "react-redux";

import CustomButton from "../customButton/customButton";
import CartItem from "../cartItem/cartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cartDropDown.scss";

function CartDropDown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
