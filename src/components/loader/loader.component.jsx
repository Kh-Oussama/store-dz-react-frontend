import React from 'react';
import './loader.styles.scss';

const Loader = () => {
    return (
        <div className="wrapper">
            <div className="box-wrap">
                <div className="box one"/>
                <div className="box two"/>
                <div className="box three"/>
                <div className="box four"/>
                <div className="box five"/>
                <div className="box six"/>
            </div>
        </div>
    )
}

export default Loader;