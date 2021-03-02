import React from "react";

import CustomButton from "../customButton/customButton";

import "./cartDropDown.scss";

export default function CartDropDown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
}
