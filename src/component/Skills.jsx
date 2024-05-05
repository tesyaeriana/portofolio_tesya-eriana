import React from "react";
import HtmlImg from "../assets/logos_html.png";
import CssImg from "../assets/logos_css.png";
import JstImg from "../assets/logos_js.png";
import LaravelImg from "../assets/logos_laravel.png";
import FigmaImg from "../assets/logos_figma.png";
import './skills.css';
const Skills = () => {
    return (
        <section className="about section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Skills</span>

            <div className="skills__container container">
             
                <div className="skills__img">
                    <ul className="skills__item">
                        <li><img className="skills__list" src={HtmlImg} alt="" /></li>
                        <li><img className="skills__list" src={CssImg} alt="" /></li>
                        <li><img className="skills__list" src={JstImg} alt="" /></li>
                        <li><img className="skills__list" src={LaravelImg} alt="" /></li>
                        <li><img className="skills__list" src={FigmaImg} alt="" /></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills;
