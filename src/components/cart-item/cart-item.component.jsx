import React from "react";

import './cart-item.styles.scss';
import imageUrl from "../../assets/img/pic-1.jpg";


const CartItem = () => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <span className="name">E.LONDON</span>
            <span className="price">$18</span>
        </div>
        <i className="fas fa-times"/>
        <div className="item-qnt">
            8
        </div>
    </div>
);

export default React.memo(CartItem);
