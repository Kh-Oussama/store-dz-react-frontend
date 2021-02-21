import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import ProductItem from "../product-item/product-item.component";

import P_3 from "../../assets/img/pic-3.jpg";
import P_4 from "../../assets/img/pic-4.jpg";
import P_5 from "../../assets/img/pic-5.jpg";
import P_6 from "../../assets/img/pic-6.jpg";
import P_7 from "../../assets/img/pic-7.jpg";
import P_8 from "../../assets/img/pic-8.jpg";
import P_9 from "../../assets/img/pic-9.jpg";
import P_10 from "../../assets/img/pic-10.jpg";
import P_11 from "../../assets/img/pic-11.jpg";
import P_12 from "../../assets/img/pic-12.jpg";
import P_13 from "../../assets/img/pic-13.jpg";
import P_14 from "../../assets/img/pic-14.jpg";


SwiperCore.use([Pagination]);
const ProductRelated = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });
    return (
        <div className="product-related">
            <div className="workShowcase__top ">
                <p className="title-3">our portfolio</p>
                <h1 className="title_1">Related Products</h1>
                <p className="paragraph">We are committed to providing our customers with exceptional service
                    while <br/> offering our employers the best training</p>
            </div>
            <div className="product-related--swiper">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={Math.floor(width * 3 / 1325) + 1.5}
                    pagination={{clickable: true}}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}

                >

                    <SwiperSlide>
                        <div className="product-container">
                            <ProductItem imageUrl1={P_13} imageUrl2={P_14} title={"Aged Pine Scented Candle"}
                                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-container">
                            <ProductItem imageUrl1={P_3} imageUrl2={P_4} title={"Aged Pine Scented Candle"}
                                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-container">
                            <ProductItem imageUrl1={P_5} imageUrl2={P_6} title={"Aged Pine Scented Candle"}
                                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-container">
                            <ProductItem imageUrl1={P_7} imageUrl2={P_8} title={"Aged Pine Scented Candle"}
                                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-container">
                            <ProductItem imageUrl1={P_9} imageUrl2={P_10} title={"Aged Pine Scented Candle"}
                                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-container">
                            <ProductItem imageUrl1={P_11} imageUrl2={P_12} title={"Aged Pine Scented Candle"}
                                         lastPrice={"$17.00"} currentPrice={"$13.60"}/>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    )
}

export default ProductRelated;