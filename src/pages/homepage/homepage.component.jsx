import React, {useEffect, useState} from 'react';
import Story from "../../components/story-swiper/story-swiper.component";
import Directory from "../../components/directory/directory.component";
import FeaturesSection from "../../components/features-section/features-section.component";
import ServicesSectionContainer from "../../components/services-section/services-section.container";
import SubscribeUs from "../../components/subscribe-us-section/subscribe-us-section.component";


const HomePage = () => {
    return (
        <React.Fragment>
            <Story/>
            <Directory/>
            <ServicesSectionContainer/>
            <FeaturesSection/>
            <SubscribeUs/>
        </React.Fragment>
    )
};

export default HomePage;