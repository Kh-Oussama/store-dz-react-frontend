import React from 'react';
import {Link} from "react-router-dom";
import SearchBar from "../../search-bar/search-bar.component";

const Dropdown = ({dropdownState}) => (
    <div className="navigation__dropdown" style={{
        height : dropdownState ? '40rem' : '0',
        visibility: dropdownState ? 'visible' : 'hidden',
        opacity: dropdownState ? '1' : '0',
        zIndex: dropdownState ? '1' : '-1',
        transform: dropdownState ? 'translateY(0)' : 'translateY(-3rem)',

    }}>
        <SearchBar isInsideDropdown={true}/>
        <div className="dropdown__item  dropdown__item-1">
            <Link to=''>
                <i className="fas fa-home"/> Home
            </Link>
        </div>
        <div className="dropdown__item  dropdown--item-2">
            <Link to=''>
                <i className="fab fa-shopify"/> Shop
            </Link>
        </div>
        <div className="dropdown__item  dropdown--item-3">
            <Link to=''>
                <i className="fas fa-tags"/> Sale
            </Link>
        </div>
        <div className="dropdown__item  dropdown--item-4">
            <Link to=''>
                <i className="fab fa-elementor"/> store.It MAG
            </Link>
        </div>
        <div className="dropdown__item  dropdown--item-5">
            <Link to=''>
                <i className="fab fa-bandcamp"/> BRAND
            </Link>
        </div>
        <div className="dropdown__item  dropdown--item-6">
            <Link to=''>
                <i className="fas fa-video"/> Video
            </Link>
        </div>
        <div className="dropdown__item  dropdown--item-7">
            <Link to=''>
                <i className="fas fa-calendar-alt"/> EVENTS
            </Link>
        </div>
        <div className="dropdown__item  dropdown--item-8">
            <Link to=''>
                <i className="fab fa-magento"/> AGENTS
            </Link>
        </div>
        <div className="dropdown__item  dropdown--item-9">
            <Link to=''>
                <i className="fas fa-store-alt"/> STORES
            </Link>
        </div>
        <div className="dropdown__item  dropdown--item-10">
            <Link to=''>
                <i className="fas fa-id-card"/> Contact
            </Link>
        </div>
        <div className="dropdown__item  dropdown__item-11">
            <span>
                <i className="fab fa-facebook"/> Facebook
            </span>

            <span>
                <i className="fab fa-twitter"/> twitter
            </span>

            <span>
                <i className="fab fa-instagram"/> instagram
            </span>
        </div>
    </div>
)
export default Dropdown;