// Import React/Redux Components
import React from "react";
import { connect } from "react-redux";

// Import Scss/SVG
import './cart-icon.styles.scss'

// Import SVG
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

// Import Cart Reducer
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"></ShoppingIcon>
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
