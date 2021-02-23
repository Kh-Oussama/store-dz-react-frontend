import React from 'react';
import {Link} from "react-router-dom";


const ContactUs = () => {
    return (
        <div className="contactUs">
            <div className="content">
                <div className="content-contactInfo">
                    <h1>Contact Info</h1>
                    <div className="info">
                        <i className="fas fa-map-marked-alt"/>
                        <span>Num 506 la terre familial Ouest Bordj el Baheri</span>
                    </div>
                    <div className="info">
                        <i className="far fa-envelope"/>
                        <span>store.dz@gmail.dz</span>
                    </div>
                    <div className="info">
                        <i className="fas fa-phone"/>
                        <span>+213540637874</span>
                    </div>
                    <div className="social-Media">
                        <Link to="/">
                            <span><i className="fab fa-instagram-square"/></span>
                        </Link>
                        <Link to="/">
                            <span><i className="fab fa-facebook-square"/></span>
                        </Link>
                        <Link to="/">
                            <span><i className="fab fa-twitter-square"/></span>
                        </Link>
                    </div>
                </div>
                <div className="content-contactForm">
                    <h1>Send a Message</h1>
                    <form action="" className="formBlock" >
                        <div className="form-group">
                            <input type="text" name="firstName"  required/>
                            <span>First Name :</span>
                        </div>
                        <div className="form-group">
                            <input type="text" name="lastName" required/>
                            <span>Last Name :</span>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" required/>
                            <span>Email Address :</span>
                        </div>
                        <div className="form-group">
                            <input type="text" name="number" required/>
                            <span>Phone Number :</span>
                        </div>
                        <div className="form-group textarea">
                            <textarea name="firstName" required rows={3}/>
                            <span>write your message here :</span>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;