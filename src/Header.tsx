import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from './logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToMain = () => {
        const mainSection = document.getElementById('main-section');
        if (mainSection) {
            mainSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToPrices = () => {
        const pricesSection = document.getElementById('prices-section');
        if (pricesSection) {
            pricesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg bg-white navbar-light shadow-sm py-2 py-lg-0 px-2 px-lg-0 sticky-top ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {}
                <a href="index.html" className="navbar-brand ms-lg-3 d-none d-lg-block">
                    <h1 className="m-0 text-uppercase text-dark">
                        <img 
                            src={logo} 
                            alt="Láng Tamás logó" 
                            className="me-2 header-logo" 
                            style={{ height: '70px' }}
                        />
                    </h1>
                </a>

                {}
                <div className="d-flex align-items-center d-lg-none">
                    <div className="phone-icon-circle me-2">
                        <i className="navbar-icon bi-telephone-plus"></i>
                    </div>
                    <div className="phone-number-container">
                        <a className="custom-btn btn phone-number" href="#section_5">
                            +36 70 624 4713
                        </a>
                    </div>
                </div>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a  className="nav-item nav-link active" onClick={scrollToMain} >KEZDŐLAP</a>
                        <a className="nav-item nav-link" onClick={scrollToAbout}>RÓLAM</a>
                        <a  className="nav-item nav-link" onClick={scrollToServices}>SZOLGÁLTATÁSOK</a>
                        <a  className="nav-item nav-link" onClick={scrollToPrices}>ÁRAK</a>
                        <div className="nav-item dropdown">
                            {}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;