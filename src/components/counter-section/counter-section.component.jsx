import React from 'react';
import C_1 from "../../assets/img/c1.jpg";


const CounterSection = () => {
    return (
        <div className="Counter-section">
            <div className="Counter-section__top">
                <div className="counter-block">
                    <div className="counter-block__item">
                        <h1>8705</h1>
                        <span>Projects completed</span>
                    </div>
                    <div className="counter-block__item">
                        <h1>480</h1>
                        <span>Active Clients</span>
                    </div>
                    <div className="counter-block__item">
                        <h1>626</h1>
                        <span>cups of coffee</span>
                    </div>
                    <div className="counter-block__item">
                        <h1>9774</h1>
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