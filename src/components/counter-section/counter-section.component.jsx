import React, {useEffect, useState} from 'react';
import C_1 from "../../assets/img/c1.jpg";
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from "react-countup";

const CounterSection = () => {
    return (
        <div className="Counter-section">
            <div className="Counter-section__top">
                <div className="counter-block">
                    <div className="counter-block__item">
                        <CountUp end={8705} redraw={true}>
                            {({ countUpRef, start,  }) => (
                                <VisibilitySensor onChange={ () => {
                                    start();
                                }} delayedCall>
                                    <h1>
                                        <span ref={countUpRef} />
                                    </h1>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <span>Projects completed</span>
                    </div>
                    <div className="counter-block__item">
                        <CountUp end={408} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <h1>
                                        <span ref={countUpRef} />
                                    </h1>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <span>Active Clients</span>
                    </div>
                    <div className="counter-block__item">
                        <CountUp end={626} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <h1>
                                        <span ref={countUpRef} />
                                    </h1>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <span>cups of coffee</span>
                    </div>
                    <div className="counter-block__item">
                        <CountUp end={9747} >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <h1>
                                        <span ref={countUpRef} />
                                    </h1>
                                </VisibilitySensor>
                            )}
                    </CountUp>
                        <span>Happy clients</span>
                    </div>
                </div>
            </div>
            <div className="Counter-section__bottom">
                    <img src={C_1} alt="image"/>

            </div>
        </div>
    )
}

export default CounterSection;