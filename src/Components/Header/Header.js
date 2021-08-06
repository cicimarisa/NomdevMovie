import './Header.scss';
//import ham from "../../img/ham.svg";
//import exit from "../../img/exit.svg";
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

    /* let [isToggle, setIsToogle] = useState(false)
    let menuActive = isToggle ? 'isActive' : '';

    function handleClick() {
        setIsToogle(prevState => !prevState)
    } */

    return (
        <div className="navbar">
            <div className="container">
                <NavLink to="/" className="logo">Nomdev<span>Movie</span></NavLink>

                {/*<img id="mobile-cta" className="mobile-menu" src={ham} alt="Open Navigation" onClick={handleClick} />

                 <nav className={menuActive}>
                    <img id="mobile-exit" className="mobile-menu-exit" src={exit} alt="Exit" onClick={handleClick} />
                </nav> */}

            </div>
        </div >
    )
}

export default Header;