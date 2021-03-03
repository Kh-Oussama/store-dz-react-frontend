import React from 'react';
import './cart-dropdown.styles.scss';
import {withRouter} from 'react-router-dom';
import CartItem from "../cart-item/cart-item.component";


const CartDropdown = ({history}) => (
    <div className="cart-dropdown">
        <div className="cart-dropdown-items">
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
        <button onClick={() => {
            history.push('/checkout');
        }
        }>
            <i className="fas fa-cash-register"/> Go To CHECKOUT
        </button>
    </div>
);


export default withRouter(CartDropdown);
