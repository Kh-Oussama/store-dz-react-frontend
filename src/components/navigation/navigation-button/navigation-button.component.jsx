import React from 'react';

const NavButton = ( {setDropdownState,dropdownState}) => {

    return (
        <div className="header__item header__item--navigation">
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle"
                       onClick={() => setDropdownState(!dropdownState)}/>
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
            </div>
        </div>
    );
}

export default NavButton;