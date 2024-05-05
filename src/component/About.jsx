import React from "react";
import "./about.css";
import AboutImg from "../assets/about.jpg";
import CV from "../assets/CV_Tesya Eriana.pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container">
                <img className="about__img" src={AboutImg} alt="" />
                <div className="about__data">
                    <p className="about__description">
                        I am a 6th-semester student with an interest in UI/UX Design and Front-end Development. Experienced in creating websites using CSS, HTML, and JavaScript. I have also been exploring Laravel for back-end web development. I believe in creativity, adaptation, and a passion for learning in information technology. Ready to contribute and continue to develop in the technology industry.
                    </p>
                    <div className="button-cv">
                        <a download="CV_Tesya_Eriana.pdf" href={CV} className="button button--flex">
                            Download CV
                            <FontAwesomeIcon className="about__icon" icon={faDownload} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
