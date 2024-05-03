import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h3 className="footer__title">Connect With Me</h3>
               
                <div className="footer__social">
                    <a href="" className="footer__social-link" target='_blank'><i class="bx bxl-instagram"></i></a>
                    <a href="" className="footer__social-link" target='_blank'><i class="bx bxl-github"></i></a>
                    <a href="" className="footer__social-link" target='_blank'><i class="bx bxl-linkedin"></i></a>
                </div>
                <span className="section__subtitle">Tesya Eriana-2024</span>
            </div>
        </footer>
    );
}

export default Footer;
