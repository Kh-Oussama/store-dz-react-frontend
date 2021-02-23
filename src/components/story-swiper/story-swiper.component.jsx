import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSpring, animated} from "react-spring";
import 'swiper/swiper.scss';
import Story_1 from "../../assets/img/FB_IMG_1605310761314.jpg";
import Story_2 from "../../assets/img/FB_IMG_1605310763585.jpg";
import Story_3 from "../../assets/img/flip-click-clock-bamboo-715225.jpg";
import Story_4 from "../../assets/img/FB_IMG_1605310785791.jpg";
import Story_6 from "../../assets/img/epoque-vase-peacock-18cm-866233.jpg";
import Story_7 from "../../assets/img/fox-bookend-tan-white-436708.jpg";
import Story_8 from "../../assets/img/narrow-aztec-pot-with-lid-911511.jpg";
import Story_9 from "../../assets/img/floating-photo-frame-box-white-5x7-379302.jpg";

const Story = () => {

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() =>  {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={ Math.floor(width * 5 / 1325)+1 }
            grabCursor={true}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}

        >
            <SwiperSlide>
                <div className="story">
                    <div className="story__imgBlock">
                        <img src={Story_1} alt=""/>
                    </div>
                    <span className="story__user">CANDLES</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="story">
                    <div className="story__imgBlock">
                        <img src={Story_2} alt=""/>
                    </div>
                    <span className="story__user">PLANTERS</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="story">
                    <div className="story__imgBlock">
                        <img src={Story_3} alt=""/>
                    </div>
                    <span className="story__user">CLOCKS</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="story">
                    <div className="story__imgBlock">
                        <img src={Story_4} alt=""/>
                    </div>
                    <span className="story__user">INDOOR POTS</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="story">
                    <div className="story__imgBlock">
                        <img src={Story_6} alt=""/>
                    </div>
                    <span className="story__user">VASES</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="story">
                    <div className="story__imgBlock">
                        <img src={Story_7} alt=""/>
                    </div>
                    <span className="story__user">BOOKENDS</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="story">
                    <div className="story__imgBlock">
                        <img src={Story_8} alt=""/>
                    </div>
                    <span className="story__user">JARS</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="story">
                    <div className="story__imgBlock">
                        <img src={Story_9} alt=""/>
                    </div>
                    <span className="story__user">FRAMES</span>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Story;