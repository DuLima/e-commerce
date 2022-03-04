// Import React Components
import React from "react";

// Import Scss/SVG
import "./cart-dropdown.styles.scss";

// Import Components
import CustomButton from "../custom-button/custom-button.component";

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
