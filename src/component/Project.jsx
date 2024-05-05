import React, {useState} from "react";
import "./project.css";
import Donation from "../assets/donation.png";
import SPK from "../assets/spk.png";
import  Donasi from "../assets/donasi.png";
import BookSelf from "../assets/bookself.png";
import BankSampah from "../assets/bank-sampah.png";

const Project = () => {
    const [toogleState, setToogleState] = useState(0);

    const toogleTab = (index) => {
        setToogleState(index)
    }


    return (
        <section className="project section" id="project">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="project__container container">
                <div className="project__content">
                    <div>
                        <img src={Donation} alt="project1" />
                        <h3 className="project__title">Design Web Donation</h3>
                    </div>
                    <span className="project__button" onClick={() =>
                    toogleTab(1)}>View More <i className="uil uil-arrow-right project__button-icon"></i></span>

                    <div className={toogleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toogleTab(0)} className="uil uil-times project__modal-close"></i>
                            <h3 className="project__modal-title">Design Web Donation</h3>
                            <p className="project__modal-description">
                            A website resulting from one of the micro challenge tasks from an independent study, namely creating a Rapid Report website design where on this website the public can make reports about people who need help and make donations.
                            </p>

                            <ul className="project__modal-project">
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                    create UI/UX research
                                    </p>
                                    
                                </li>
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                    create low-fi and hi-fi design in figma
                                    </p>
                                    
                                </li>
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                    make a prototype in figma

                                    </p>
                                    
                                </li>
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                    make usability testing

                                    </p>
                                    
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="project__content">
                    <div>
                        <img src={Donasi} alt="project1" />
                        <h3 className="project__title">Design Web Donation</h3>
                    </div>
                    <span className="project__button" onClick={() =>
                    toogleTab(2)}>View More <i className="uil uil-arrow-right project__button-icon"></i></span>

                    <div className={toogleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toogleTab(0)} className="uil uil-times project__modal-close"></i>
                            <h3 className="project__modal-title">Design Web Donation</h3>
                            <p className="project__modal-description">
                            A website used to help victims of natural disasters through music events, it is a web-based platform where users can buy tickets and make donations. Ticket purchase transactions are designed simply to make the process easier. It contains stories about victims of natural disasters.
                            </p>

                            <ul className="project__modal-project">
                            <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                    create UI/UX research
                                    </p>
                                    
                                </li>
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                    create low-fi and hi-fi design in figma
                                    </p>
                                    
                                </li>
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                    make a prototype in figma

                                    </p>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="project__content">
                    <div>
                        <img src={BankSampah} alt="project1" />
                        <h3 className="project__title">Web Bank Sampah</h3>
                    </div>
                    <span className="project__button" onClick={() =>
                    toogleTab(3)}>View More <i className="uil uil-arrow-right project__button-icon"></i></span>

                    <div className={toogleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toogleTab(0)} className="uil uil-times project__modal-close"></i>
                            <h3 className="project__modal-title">Bank Sampah</h3>
                            <p className="project__modal-description">
                            Bank Sampah Malang is a website for selling recyclable inorganic waste and valuable used items.
                            </p>

                            <ul className="project__modal-project">
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        In working on this project, I contributed as a frontend and back-end developer.
                                    </p>
                                    
                                </li>
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        Create website with Laravel and Mysql for data management
                                    </p>
                                </li>
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        <a href="https://github.com/aurasagita/bank_sampah.git">Open Github</a>
                                    </p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="project__content">
                    <div>
                        <img src={SPK} alt="project1" />
                        <h3 className="project__title">Web SPK MOORA</h3>
                    </div>
                    <span className="project__button" onClick={() =>
                    toogleTab(4)}>View More <i className="uil uil-arrow-right project__button-icon"></i></span>

                    <div className={toogleState === 4 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toogleTab(0)} className="uil uil-times project__modal-close"></i>
                            <h3 className="project__modal-title">SPK MOORA</h3>
                            <p className="project__modal-description">
                            A website-based decision making system is a platform that is used to help users determine decisions by determining criteria, alternatives and scores for each alternative for each criterion. This website was designed using the Laravel framework.
                            </p>

                            <ul className="project__modal-project">
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        This project was carried out in groups with 3 members
                                    </p>
                                </li>
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        Using Laravel as the framework and Mysql for data management
                                    </p>
                                </li>
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        Applying the moora method for the ranking calculation process has an accuracy rate of 80%
                                    </p>
                                </li>
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        <a href="https://github.com/mirzafaradiba01/spk_moora.git">Open Github</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="project__content">
                    <div>
                        <img src={BookSelf} alt="project1" />
                        <h3 className="project__title">Web BookSelf</h3>
                    </div>
                    <span className="project__button" onClick={() =>
                    toogleTab(5)}>View More <i className="uil uil-arrow-right project__button-icon"></i></span>

                    <div className={toogleState === 5 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toogleTab(0)} className="uil uil-times project__modal-close"></i>
                            <h3 className="project__modal-title">Web BookSelf</h3>
                            <p className="project__modal-description">
                            A website that is a to-do list application for recording books that have been read or not.
                            </p>

                            <ul className="project__modal-project">
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        Create website with html, css, and javascript.
                                    </p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
       </section>
    )
}

export default Project;

