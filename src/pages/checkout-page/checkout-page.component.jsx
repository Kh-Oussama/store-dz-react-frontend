import React from 'react';
import 'semantic-ui-css/components/button.min.css'
import {Link} from "react-router-dom";
import ShoppingCartItem from "../../components/shopping-cart-item/shopping-cart-item.component";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";


const CheckoutPage = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="view-product shopping-cart">
                <div className="view-product-topLeft">
                    <div className="shop-header__top">
                        <div className="shop-header__top-block">
                            <Link to='/'>
                                <i className="fas fa-home"/> <span><i className="fas fa-chevron-right"/></span> <span
                                className="linkText">Home</span>
                            </Link>
                            <Link to='/shop'>
                                <span> <i className="fas fa-chevron-right"/></span> <span className="linkText">shopping cart</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="view-product-topRight"/>
                <div className="view-product-content view-product-content-2">
                    <h1>Shopping cart</h1>
                    <p>Currently you have 2 item(s) in your cart</p>
                    <div className="table">
                        <div className="table--header">
                            <div className="table--header-column">Product</div>
                            <div className="table--header-column">Description</div>
                            <div className="table--header-column">Quantity</div>
                            <div className="table--header-column">price</div>
                            <div className="table--header-column">Remove</div>
                        </div>
                        <ShoppingCartItem/>
                        <ShoppingCartItem/>
                        <ShoppingCartItem/>
                        <div className="table--footer">
                            <div className="table--footer-column p">Total Price</div>
                            <div className="table--footer-column">DZD 1100</div>
                        </div>
                        <div className="table--footer action">
                            <div className="table--footer-column act btn1">
                                <button className="huge ui black button">
                                    <i className="fas fa-chevron-left"/> Continue Shopping
                                </button>
                            </div>
                            <div className="table--footer-column act btn2">
                                <button className="massive teal ui button">
                                    <i className="fab fa-cc-visa"/> Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="view-product-bottomLeft"/>
                <div className="view-product-bottomRight"/>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default CheckoutPage;