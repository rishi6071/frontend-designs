import React from 'react';
import './css/Home.css';
import AboutBanner from './images/about.jpg';
import Common from './Common';
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <>
            <section className="d-flex align-items-center">
                <div className="container">
                    <div className="row py-3">

                        <Common mainCaption="Join us and develop yourself with"
                            subCaption="We create the most User-Friendly Application."
                            btnName="Contact Now"
                            visit="/contact"
                            imgSrc={AboutBanner}
                            alt="About Banner"
                        />

                    </div>
                </div>
            </section>
        </>
    );
}

export default About;