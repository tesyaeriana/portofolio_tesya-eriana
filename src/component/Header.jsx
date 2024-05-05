import React from 'react';
import "./style_header.css";

const Header = () => {
    return (
        <header className='header'>
            <nav className="container">
                <a href="index.html"  className="nav__link">Tesya</a>
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className='nav__link' href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav__link' href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav__link' href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav__link' href="#contacts">Contacts</a>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </header>
    )
}
export default Header