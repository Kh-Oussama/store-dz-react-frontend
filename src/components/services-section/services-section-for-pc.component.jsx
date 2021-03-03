import React from 'react';
import Candle from '../../assets/img/candle.png';
import Frame from '../../assets/img/picture-frame.png';
import vase from '../../assets/img/vase.png';
import Jars from '../../assets/img/jars.png';


const ServicesSection = () => (
    <section className="services-section">
        <div>
            <h1 className="title_2">services we are offering</h1>
            <h1 className="title_1">
                WE DESIGN DIGITAL PRODUCTS THAT <br/>
                HELP GROW BUSINESSES
            </h1>
            <p className="paragraph">we are committed to providing our customers with exceptional service <br/> while
                offering out employees the best training </p>
        </div>
        <div className="carts">
            <div className="carts__cart">
                <img src={Candle} alt="" className="carts__cart--img"/>
                <h4 className="carts__cart--title">Candles</h4>
                <div className="red-divider"/>
            </div>
            <div className="carts__cart">
                <img src={Frame} alt="" className="carts__cart--img"/>
                <h4 className="carts__cart--title">Frames</h4>
                <div className="red-divider"/>
            </div>
            <div className="carts__cart">
                <img src={vase} alt="" className="carts__cart--img"/>
                <h4 className="carts__cart--title">Vases</h4>
                <div className="red-divider"/>
            </div>
            <div className="carts__cart">
                <img src={Jars} alt="" className="carts__cart--img"/>
                <h4 className="carts__cart--title">Jars</h4>
                <div className="red-divider"/>
            </div>
        </div>
    </section>
);

export default ServicesSection;