import React from 'react';
import './cart-icon.styles.scss';
import shopingBag from './shopping-bag.svg';
import {createStructuredSelector} from "reselect";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {connect} from 'react-redux';


const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <img src={shopingBag} alt="shopping icon" className='shopping-icon'/>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CartIcon);
