import React from 'react';
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">

            <ul className="nav">
                <li className="nav__item"><Link to="#" className="nav__link">Find your dream home</Link></li>
                <li className="nav__item"><Link to="#" className="nav__link">Request proposal</Link></li>
                <li className="nav__item"><Link to="#" className="nav__link">Download home planner</Link></li>
                <li className="nav__item"><Link to="/contactus" className="nav__link">Contact us</Link></li>
                <li className="nav__item"><Link to="#" className="nav__link">Submit your property</Link></li>
                <li className="nav__item"><Link to="#" className="nav__link">Come work with us!</Link></li>
            </ul>
            <p className="copyright">
                &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for your own purposes. This
                does NOT apply if you plan to produce your own course or tutorials based on this project.
            </p>
        </footer>
    )
}

export default Footer;