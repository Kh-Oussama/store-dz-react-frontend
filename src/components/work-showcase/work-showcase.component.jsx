import React from 'react';
import Gallery from "../gallery/gallery.component";

const WorkShowcase = () => {

    return (
        <div className="workShowcase-section">
            <div className="workShowcase__top ">
                <p className="title-3">our portfolio</p>
                <h1 className="title_1">Work Showcase</h1>
                <p className="paragraph">We are committed to providing our customers with exceptional service
                    while <br/> offering our employers the best training</p>
            </div>
            <Gallery/>
        </div>
    )
};

export default WorkShowcase;