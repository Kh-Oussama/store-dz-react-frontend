import React from 'react';
import './cart-icon.styles.scss';
import ShopingBag from './shopping-bag.svg';

const   CartIcon = () => (
  <div className="cart-icon" >
      <img  src={ShopingBag} alt="shopping icon" className='shopping-icon' />
      <span className="item-count">0</span>
  </div>
);

export default CartIcon;
