import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
        <nav className={`navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 sticky-top ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Logó csak asztali nézetben */}
                <a href="index.html" className="navbar-brand ms-lg-5 d-none d-lg-block">
                    <h1 className="m-0 text-uppercase text-dark">
                        <img 
                            src="/images/logo.png" 
                            alt="Láng Tamás logó" 
                            className="me-3 header-logo" 
                        />
                    </h1>
                </a>

                {/* Telefonszám és ikon mobilnézetben */}
                <div className="d-flex align-items-center d-lg-none">
                    <div className="phone-icon-circle me-3">
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
                        <a href="index.html" className="nav-item nav-link active">KEZDŐLAP</a>
                        <a href="about.html" className="nav-item nav-link">RÓLAM</a>
                        <a href="service.html" className="nav-item nav-link">SZOLGÁLTATÁSOK</a>
                        <div className="nav-item dropdown">
                            {/* Dropdown tartalom */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;