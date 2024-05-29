import React from 'react';
import './footer.css';

const NewFoter = () => {
    return (
        <footer className='footer' id='contacts'>
            <div className="footer__container container">
                <h3 className="footer__title">Connect With Me</h3>
               
                <div className="footer__social">
                    
                    <a href="https://www.instagram.com/" className="footer__social-link" target='_blank' rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                    <a href="https://github.com/tesyaeriana" className="footer__social-link" target='_blank' rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
                    <a href="https://www.linkedin.com/in/tesya-eriana/" className="footer__social-link" target='_blank' rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                </div>
                <span className="section__subtitle">Tesya Eriana - 2024</span>
            </div>
        </footer>
    );

}

export default NewFoter;