import React from 'react';
import './css/Home.css';
import HomeBanner from './images/home.jpg';
import Common from './Common';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <section className="d-flex align-items-center">
                <div className="container">
                    <div className="row py-3">

                        <Common mainCaption="Grow Your Business with"
                            subCaption="We are the Team of Talented Developers making Android and Web Applications."
                            btnName="Get Started"
                            visit="/services"
                            imgSrc={HomeBanner}
                            alt="Home Banner"
                        />

                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;