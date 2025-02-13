import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToServices = () => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container-fluid hero-header" id='main-section'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h1 className="text-uppercase text-white mb-4">Láng Tamás</h1>
                        <h2 className="text-white mb-4">
                            Szakképzett Kutya Trainer
                        </h2>
                        <button className="btn" onClick={scrollToServices}>
                            Szolgáltatások megtekintése
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;