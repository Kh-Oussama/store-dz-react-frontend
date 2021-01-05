import React from 'react';
import ServicesSectionForPc from "./services-section-for-pc.component";
import ServicesSectionForPhone from "./services-section-for-phone.component";
import useWindowSize from "../utilities/useWindowSize.hook";

const ServicesSectionContainer = () => {
    const deviceType = useWindowSize();

    return ( deviceType !== "phone"
            ? (
                <ServicesSectionForPc/>
            )
            :   (
                <ServicesSectionForPhone/>
            )
    )
};

export default ServicesSectionContainer;
