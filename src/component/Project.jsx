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
        <section className="project section">
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
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolores neque aliquam, dignissimos ea, repudiandae tempore, sed beatae repellendus illum fugiat molestias autem enim explicabo. Sapiente voluptas veniam incidunt minus.
                            </p>

                            <ul className="project__modal-project">
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        Lorem ipsum dolor.
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
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolores neque aliquam, dignissimos ea, repudiandae tempore, sed beatae repellendus illum fugiat molestias autem enim explicabo. Sapiente voluptas veniam incidunt minus.
                            </p>

                            <ul className="project__modal-project">
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        Lorem ipsum dolor.
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
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolores neque aliquam, dignissimos ea, repudiandae tempore, sed beatae repellendus illum fugiat molestias autem enim explicabo. Sapiente voluptas veniam incidunt minus.
                            </p>

                            <ul className="project__modal-project">
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        Lorem ipsum dolor.
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
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolores neque aliquam, dignissimos ea, repudiandae tempore, sed beatae repellendus illum fugiat molestias autem enim explicabo. Sapiente voluptas veniam incidunt minus.
                            </p>

                            <ul className="project__modal-project">
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        Lorem ipsum dolor.
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
                    toogleTab(4)}>View More <i className="uil uil-arrow-right project__button-icon"></i></span>

                    <div className={toogleState === 4 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toogleTab(0)} className="uil uil-times project__modal-close"></i>
                            <h3 className="project__modal-title">Web BookSelf</h3>
                            <p className="project__modal-description">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolores neque aliquam, dignissimos ea, repudiandae tempore, sed beatae repellendus illum fugiat molestias autem enim explicabo. Sapiente voluptas veniam incidunt minus.
                            </p>

                            <ul className="project__modal-project">
                                <li className="project__modal-project">
                                    <i className="uil uil-check-circle project__modal-icon">

                                    </i>
                                    <p className="project__modal-info">
                                        Lorem ipsum dolor.
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

