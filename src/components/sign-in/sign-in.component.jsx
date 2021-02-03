import React from 'react';
import Image from "../../assets/img/loginImg.svg";
import "./sign-in.styles.scss";
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className="auth-page-container">
            <div className="container">
                <div className="home">
                    <Link to="/">
                        <i className="fas fa-home"/>
                    </Link>
                </div>
                <h1 className="title">Sign In</h1>
                <div className="image-block">
                    <img src={Image} alt="Login Image"/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                    <div className="form-footer">
                        <button className="btn" type="button">
                            <i className="fas fa-sign-in-alt"/> Sign in
                        </button>
                    </div>
                </div>
            </div>
            <div className="right">
                <Link to="/register">
                    Register
                </Link>
            </div>
        </div>
    );
}

export default SignIn;
