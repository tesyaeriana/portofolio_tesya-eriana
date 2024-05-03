import React from 'react';
import "./home.css";
import Data from './Data'
const Home = () => {
    return (
        <section className="home section" >
            <div className="home__container container">
                <div className="home__content  container">
                    <div className="home__img">
                       
                    </div>
                    <Data/>
                </div>
            </div>
        </section>
    )
}
export default Home