import React, {useEffect, useState} from 'react';
import Image from "../../assets/img/loginImg.svg";
import "./sign-in.styles.scss";
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectLoading, selectSignInError} from "../../redux/users/user.selectors";
import {signInStart} from "../../redux/users/user.actions";
import {connect} from 'react-redux';
import Loader from "../loader/loader.component";


const SignIn = ({signInStart, loading, errors}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;
    const [unauthorizedError, setUnauthorizedError] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        if (errors) {
            if (errors.error === 'Unauthorized') setUnauthorizedError(true);
            else if (errors.email) setEmailError(errors.email);
            if (errors.password) setPasswordError(errors.password);
        }
    }, [errors]);

    const handleSubmit = event => {
        event.preventDefault();
        setUnauthorizedError(false);
        setEmailError('');
        setPasswordError('');
        signInStart(email, password);
    };

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    };
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
                {
                    unauthorizedError
                        ? (<h4 className="input-error"><i className="fas fa-exclamation-triangle"/> Please check your
                            information and <br/> try again.</h4>)
                        : null
                }
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleChange}
                            />
                            {
                                emailError
                                    ? (<span className="input-error"><i
                                        className="fas fa-exclamation-triangle"/> {emailError}</span>)
                                    : null
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={handleChange}
                            />
                            {
                                passwordError
                                    ? (<span className="input-error"><i
                                        className="fas fa-exclamation-triangle"/> {passwordError}</span>)
                                    : null
                            }
                        </div>
                        <div className="form-footer">
                            <button className="btn" type='submit'>
                                {
                                    loading
                                        ? <Loader/>
                                        : (<span><i className="fas fa-sign-in-alt"/> Sign in</span>)

                                }

                            </button>
                        </div>
                    </form>
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

const mapStateToProps = createStructuredSelector({
    loading: selectLoading,
    errors: selectSignInError,
});

const mapDispatchToProps = dispatch => ({
    signInStart: (email, password) => dispatch(signInStart({email, password})),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

