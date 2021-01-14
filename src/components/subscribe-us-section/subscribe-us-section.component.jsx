import React from 'react';
import WorkShowcase from "../work-showcase/work-showcase.component";

const SubscribeUs = () => {
    return (
        <div className="section-4">
          <div className="subscribeUs-section">
              <div className="subscribeUs-section__title">
                <p className="paragraph">Don't miss out our latest updates</p>
                 <h1 className="title_1">Subscribe us</h1>
              </div>
              <div className="subscribeUs-section__form">
                  <form action="#" className="form">
                      <input type="text" className="form__input" placeholder=""/>
                      <button className="form__button">
                          Subscribe Now
                      </button>
                  </form>
              </div>
          </div>
            <WorkShowcase/>
        </div>

    );
}

export default SubscribeUs;