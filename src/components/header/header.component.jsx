import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Logo from './store-logo.png';
import CartIcon from "../cart-icon/cart-icon.component";
import Dropdown from "../navigation/navigation-dropdown/navigation-dropdown.component";
import NavButton from "../navigation/navigation-button/navigation-button.component";
import SearchBar from "../search-bar/search-bar.component";
import CartDropdown from "../cart/cart-dropdown.component";


const Header = () => {
    const [dropdownState, setDropdownState] = useState(false);
    return (
        <header>
            <div className="header-top">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div className="header">
                <div className="header__item header__item--logoBox">
                    <Link to='/'>
                        <img className='header__logo' src={Logo} alt="Logo"/>
                    </Link>
                </div>
                <div className="header__item header__item--nav1">
                    <Link to='' >
                        Shop
                    </Link>
                </div>
                <div className="header__item header__item--nav2">
                    <Link to=''>
                        Sale
                    </Link>
                </div>
                <NavButton setDropdownState={setDropdownState} dropdownState={dropdownState}/>
                <div className="header__item header__item--nav3">
                    <Link to=''>
                        Brand
                    </Link>
                </div>
                <div className="header__item header__item--nav4">
                    <Link to=''>
                        Store.MG
                    </Link>
                </div>
                <div className='header__item header__item--nav5'>
                    <Link to=''>
                    <SearchBar/>
                    </Link>
                    <Link to='/login'>
                        <i className="fas fa-sign-in-alt"/>
                    </Link>
                    <CartIcon/>
                    {/*<CartDropdown/>*/}
                </div>
            </div>
            <Dropdown dropdownState={dropdownState}/>
        </header>
    )
};

export default Header;
