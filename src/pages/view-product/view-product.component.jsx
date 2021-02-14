import React, {useState} from 'react';
import P_1 from "../../assets/img/pic-2.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination,Navigation]);

const ViewProduct = () => {


    return (
        <div className="view-product">
            <div className="view-product-topLeft">

            </div>
            <div className="view-product-topRight"/>
            <div className="view-product-content">
                <div className="imageBlock">
                    <div className="con">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={ 1 }
                            navigation
                            loop
                            pagination={{
                                clickable: true,
                            }}
                            grabCursor={true}

                            onSlideChange={() => {

                            }}
                            // onSwiper={(swiper) => console.log(swiper)}

                        >

                            <SwiperSlide>
                                <div className="item">
                                    <img src={P_1} alt="" className="img"/>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <img src={P_1} alt="" className="img"/>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <img src={P_1} alt="" className="img"/>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <img src={P_1} alt="" className="img"/>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <img src={P_1} alt="" className="img"/>

                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
                <div className="detail">
                    <h1 className="detail-title">
                        EVERMORE LONDON
                    </h1>
                    <p className="detail-p">
                        Grove Earth & Aged Pine Scented Candle - 300g
                    </p>
                    <div className="detail-product-number">Product Number : 15885</div>
                    <div className="detail-stars">
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="far fa-star"/>
                    </div>
                    <div className="detail-description-header">
                        <span className="active">Description</span>
                        <span>Basic Info</span>
                        <span>Caliber</span>
                    </div>
                    <div className="detail-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet asperiores blanditiis consequuntur doloribus error excepturi exercitationem iusto labore laborum, laudantium maxime nisi omnis quibusdam quos ratione sapiente unde veniam?
                    </div>
                    <div className="detail-priceBlock">
                        <div className="price">22$</div>
                        <div className="qnt">10+ in stock</div>
                    </div>
                    <div className="detail-actions">
                        <button className="add">Add to Carte</button>
                       <div className="heart">
                           <i className="far fa-heart"/>
                       </div>
                    </div>
                </div>

            </div>
            <div className="view-product-bottomLeft"/>
            <div className="view-product-bottomRight"/>
        </div>
    )
}

export default ViewProduct;