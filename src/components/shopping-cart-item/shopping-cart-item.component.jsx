import React from 'react';
import P_1 from "../../assets/img/pic-2.jpg";

const ShoppingCartItem = () => {
    return (
        <div className="table--content">
            <div className="table--content-column product">
                <img src={P_1} alt="Product img" className="product__img"/>
            </div>
            <div className="table--content-column">E.LONDON</div>
            <div className="table--content-column">
                <span className="qnt-left"><i className="fas fa-chevron-left"/></span>
                <span className="qnt-number">8</span>
                <span className="qnt-right"><i className="fas fa-chevron-right"/></span>
            </div>
            <div className="table--content-column">18$</div>
            <div className="table--content-column">
                <button className="large ui black button"><i className="fas fa-trash-alt"
                                                             style={{marginRight: '1rem'}}/>delete
                </button>
            </div>
        </div>
    )
};

export default ShoppingCartItem;