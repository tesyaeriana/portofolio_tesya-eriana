import React from 'react';
import "./home.css";

const Data = () => {
    return (
        <div className="home_data">
            <h3 className="home__subtitle">Hello, I'm Tesya Eriana</h3>
            <h1 className="home__title">Frontend Engineering</h1>
            <p className="home__description">
                Aspiring FrontEnd Developer and UI/UX Designer | Informatics Engineering Student at Politeknik Negeri Malang
            </p>
            <a href="https://api.whatsapp.com/send?phone=6285804451068&text=Halo%20Tesya!" className="button button--flex">Say Hello <i className="bx bxl-whatsapp"></i></a>
        </div>
    );
}

export default Data;
