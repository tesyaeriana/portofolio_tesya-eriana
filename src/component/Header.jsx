import React from 'react';
import "./style_header.css";

const Header = () => {
    return (
        <header className='header'>
            <nav className="container">
                <a href="index.html" className="nav__link">Tesya</a>
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className='nav__link' href="">About</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav__link' href="">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav__link' href="">Contacts</a>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </header>
    )
}
export default Header