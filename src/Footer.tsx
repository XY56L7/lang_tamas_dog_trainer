import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer bg-dark text-white-50 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                        {/* E-mail és telefonszám */}
                        <div className="mb-3">
                            <p className="mb-2">
                                <i className="bi bi-envelope text-primary me-2"></i>
                                info@kutyatrening.hu
                            </p>
                            <p className="mb-0">
                                <i className="bi bi-telephone text-primary me-2"></i>
                                +36 70 624 4713
                            </p>
                        </div>

                        {/* Copyright szöveg */}
                        <div className="copyright-text-wrap">
                            <p className="mb-0">
                                <span className="copyright-text">
                                    Copyright © {new Date().getFullYear()}{' '}
                                    <a 
                                        href="https://pal-martin-portfolio.vercel.app/" 
                                        className="text-white"
                                        target="_blank" // Új lapon nyílik meg
                                        rel="noopener noreferrer" // Biztonsági okokból
                                    >
                                        Pál Martin
                                    </a>. Minden jog fenntartva.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;