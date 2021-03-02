import React, {useEffect, useState} from 'react';
import Image from "../../assets/img/loginImg.svg";
import "./sign-up.styles.scss";
import {Link, withRouter} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';
import {selectError, selectLoading, selectSignUpError} from "../../redux/users/user.selectors";
import Loader from "../loader/loader.component";
import {signUpStart} from "../../redux/users/user.actions";

const SignUp = ({signUpStart, loading, errors}) => {
    const [userCredentials, setCredentials] = useState({name: '', email: '', password: ''});
    const {name, email, password} = userCredentials;
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');

    useEffect(() => {
        setNameError('');
        setEmailError('');
        setPasswordError('');
    },[])
    useEffect(() => {
        if (errors) {
            if (errors.email) setEmailError(errors.email);
            if (errors.password) setPasswordError(errors.password);
            if (errors.name) setNameError(errors.name);
        }
    }, [errors]);

    const handleSubmit = async event => {
        event.preventDefault();
        // if (password !== confirmPassword) {
        //     alert("passwords don't match");
        //     return;
        // }
        setNameError('');
        setEmailError('');
        setPasswordError('');
        signUpStart({name, email, password});
    };

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    };

    return (
        <div className="auth-page-container">
            <div className="container" data-text="Login" style={{height:'auto'}}>
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
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={name}
                            onChange={handleChange}
                        />
                        {
                            nameError
                                ? (<span className="input-error">{nameError}</span>)
                                : null
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={handleChange}
                        />
                        {
                            emailError
                                ? (<span className="input-error">{emailError}</span>)
                                : null
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={handleChange}
                        />
                        {
                            passwordError
                                ? (<span className="input-error">{passwordError}</span>)
                                : null
                        }
                    </div>
                    <div className="form-footer">
                        <button className="btn" type="submit">
                            {
                                loading
                                    ? <Loader/>
                                    : (<span><i className="fas fa-user-plus"/> Register</span>)
                            }
                        </button>
                    </div>
                    </form>
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

const mapStateToProps = createStructuredSelector({
    loading: selectLoading,
    errors: selectSignUpError,
});


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

