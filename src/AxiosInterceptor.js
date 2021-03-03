import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {get} from 'lodash';
import cookie from "js-cookie";
import {connect} from 'react-redux';
import {signOutSuccess} from "./redux/users/user.actions";

export class UndecoratedSetupAxios extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        axios: PropTypes.func,
        children: PropTypes.node,
        requestInterceptorHandler: PropTypes.func,
        requestInterceptorErrorHandler: PropTypes.func,
        responseInterceptorSuccessHandler: PropTypes.func,
        responseInterceptorErrorHandler: PropTypes.func,
    };

    static defaultProps = {
        axios,
        children: null,
        requestInterceptorHandler: config => config,
        requestInterceptorErrorHandler: error => Promise.reject(error),
        responseInterceptorSuccessHandler: response => response,
        responseInterceptorErrorHandler: error => Promise.reject(error),
    };

    static displayName = 'SetupAxios';

    requestInterceptor = null;
    responseInterceptor = null;

    componentDidMount() {
        this.requestInterceptor = this.props.axios.interceptors.request.use(
            this.requestInterceptorSuccessHandler,
            this.requestInterceptorErrorHandler
        );
        this.responseInterceptor = this.props.axios.interceptors.response.use(
            this.responseInterceptorSuccessHandler,
            this.responseInterceptorErrorHandler
        );
    }

    componentWillUnmount() {
        this.props.axios.interceptors.request.eject(this.requestInterceptor);
        this.props.axios.interceptors.response.eject(this.responseInterceptor);
    }

    requestInterceptorSuccessHandler = async config => {
        const token = cookie.get("access_token");
        if (typeof token === 'undefined') {
            await this.props.signOutSuccess();
            // this.props.history.push('/');
            return config;
        }


        // Process the user supplied requestInterceptorHandler
        const newConfig = this.props.requestInterceptorHandler(config);
        // Return the config with the token appended to the Authorization Header
        return {
            ...newConfig,
            headers: {
                ...get(newConfig, 'headers', {}),
                Authorization: `Bearer ${token}`,
            },
        };
    };

    requestInterceptorErrorHandler = error =>
        this.props.requestInterceptorErrorHandler(error);

    responseInterceptorSuccessHandler = response =>
        this.props.responseInterceptorSuccessHandler(response);

    responseInterceptorErrorHandler = async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && ((error.config.url === 'http://store-dz.com/api/auth/refresh') || ('http://store-dz.com/api/login'))) {
            await this.props.signOutSuccess();
            // this.props.history.push('/');
            return this.props.responseInterceptorErrorHandler(error);
        }
        if (error.response.status === 500 && !originalRequest._retry_2) {
            originalRequest._retry_2 = true;
            return axios(originalRequest);
        }
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const token = cookie.get("access_token");
            return axios.post("http://store-dz.com/api/auth/refresh", null, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }).then(res => {
                if (res.status === 201) {
                    cookie.set("access_token", res.data.access_token);
                    const token = cookie.get("access_token");
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                    return axios(originalRequest);
                }
            })
        }
        return this.props.responseInterceptorErrorHandler(error);
    };

    render() {
        return this.props.children;
    }
}

const mapDispatchToProps = dispatch => ({
    signOutSuccess: () => dispatch(signOutSuccess()),
});

export default connect(null, mapDispatchToProps)(withRouter(UndecoratedSetupAxios));
