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
                    <div className="detail-price">$18</div>
                    <div className="detail-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet asperiores blanditiis consequuntur doloribus error excepturi exercitationem iusto labore laborum, laudantium maxime nisi omnis quibusdam quos ratione sapiente unde veniam?
                    </div>
                    <span className="detail-quantityStock">10+in stock</span>
                    <div>
                        <span>
                           <i className="fas fa-chevron-left"/> 3 <i className="fas fa-chevron-right"/></span>
                        <button>Add to Carte</button>
                        <span><i className="far fa-heart"/></span>
                    </div>
                </div>

            </div>
            <div className="view-product-bottomLeft"/>
            <div className="view-product-bottomRight"/>
        </div>
    )
}

export default ViewProduct;