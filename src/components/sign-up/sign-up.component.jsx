import React from 'react';
import Image from "../../assets/img/loginImg.svg";
import "./sign-up.styles.scss";
import {Link, withRouter} from 'react-router-dom';
const SignUp = () => {
    return (
        <div className="auth-page-container">
            <div className="container" data-text="Login" >
                <div className="home">
                    <Link to="/">
                        <i className="fas fa-home"/>
                    </Link>
                </div>
                <h1 className="title">Register</h1>
                <div className="image-block">
                    <img src={Image} alt="Login Image"/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input type="email" name="email" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                    <div className="form-footer">
                        <button className="btn" type="button">
                            <i className="fas fa-user-plus"/> Register
                        </button>
                    </div>
                </div>
            </div>
            <div className="left">
                <Link to="/login">
                    Sign In
                </Link>
            </div>
        </div>
    );
}

export default withRouter(SignUp);
