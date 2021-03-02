import React from 'react';
import Story from "../../components/story-swiper/story-swiper.component";
import FeaturesSection from "../../components/features-section/features-section.component";
import ServicesSectionContainer from "../../components/services-section/services-section.container";
import SubscribeUs from "../../components/subscribe-us-section/subscribe-us-section.component";
import CounterSection from "../../components/counter-section/counter-section.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WorkShowcase from "../../components/work-showcase/work-showcase.component";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";


const HomePage = () => {
    return (
        <React.Fragment>
            <Header/>
            <Story/>
            <CollectionsOverview/>
            <ServicesSectionContainer/>
            <FeaturesSection/>
            <CounterSection/>
            <SubscribeUs/>
            <WorkShowcase/>
            <Footer/>
        </React.Fragment>
    )
};

export default HomePage;