import React from 'react';
import F_2 from "../../assets/img/f1.jpg";
import F_1 from "../../assets/img/f2.jpg";
import {Link} from "react-router-dom";





const FeaturesSection = () => {

    return (
        <div className="features-section">
               <div className="content">
                   <div className="content__text">
                       <p className="paragraph">welcome to smart web agency</p>
                       <h1 className="title_1">
                          We Are the best <br/>
                          website agency in <br/>
                          the world
                       </h1>
                       <p className="paragraph paragraph-2 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque eius magnam non quidem quod rem sapiente soluta suscipit ullam! Animi consectetur ea illo laboriosam pariatur quae repudiandae sint veritatis!</p>
                       <div className="content__text--btn">
                           <Link to=''>
                               <i className="fas fa-arrow-right"/> Learn More
                           </Link>
                       </div>
                   </div>
                   <div className="content__imgBlock">
                       <figure className="img img--1">
                           <img src={F_1} alt="f1" className="img"  />
                       </figure>
                       <figure className="img img--2">
                           <img src={F_2} alt="f2" className="img" />
                       </figure>
                   </div>
               </div>
        </div>
    );
}

export default FeaturesSection;