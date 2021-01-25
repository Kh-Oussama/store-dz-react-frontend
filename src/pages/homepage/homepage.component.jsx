import React, {useEffect, useState} from 'react';
import Story from "../../components/story-swiper/story-swiper.component";
import FeaturesSection from "../../components/features-section/features-section.component";
import ServicesSectionContainer from "../../components/services-section/services-section.container";
import SubscribeUs from "../../components/subscribe-us-section/subscribe-us-section.component";
import CounterSection from "../../components/counter-section/counter-section.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";


const HomePage = () => {
    return (
        <React.Fragment>
            <Story/>
            <CollectionsOverview/>
            <ServicesSectionContainer/>
            <FeaturesSection/>
            <CounterSection/>
            <SubscribeUs/>
        </React.Fragment>
    )
};

export default HomePage;