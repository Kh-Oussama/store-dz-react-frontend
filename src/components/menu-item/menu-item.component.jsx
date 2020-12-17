import React from "react";
import { withRouter } from 'react-router-dom';

// const MenuItem = ({ title, imageUrl , size, history, linkUrl, match}) => {
const MenuItem = ({ title, history, imageUrl}) => {
    return (
    // <div className={`menu-item menu-item__${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className={`menu-item`} onClick={() => history.push(``)}>
        <div className='background-image' style={{
            backgroundImage: 'url('+imageUrl+')',
        }} />
        <div className="content">
            {/*<h1 className="title">{title}</h1>*/}
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shope Now</span>
        </div>
    </div>
);
};

export default withRouter(MenuItem);
