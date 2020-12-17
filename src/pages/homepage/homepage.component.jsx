import React, {useEffect, useState} from 'react';
import Story from "../../components/story-swiper/story-swiper.component";
import Directory from "../../components/directory/directory.component";
import FeaturesSection from "../../components/features-section/features-section.component";
import ServicesSection from "../../components/services-section/services-section.component";

const HomePage = () => {
    return (
        <React.Fragment>
            <Story/>
            <Directory/>
            <ServicesSection/>
            <FeaturesSection/>
        </React.Fragment>
    )
};

export default HomePage;