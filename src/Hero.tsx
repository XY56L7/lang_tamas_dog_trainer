import React from 'react';
import './Hero.css'; // Egyéni CSS importálása
import Header from './Header'; // Header komponens importálása

const Hero = () => {
    return (
        <div className="container-fluid bg-primary py-lg-5 py-3 mb-lg-5 mb-3 hero-header">
            <Header /> {/* Header hozzáadva */}
            <div className="container py-lg-5 py-3">
                <div className="row justify-content-start">
                    <div className="col-lg-8 text-center text-lg-start">
                        <h1 className="text-uppercase text-white mb-lg-4 mb-2">Láng Tamás</h1>
                        <h2 className="fs-4 text-white mb-lg-4 mb-2">
                            Szakképzett Kutya Trainer
                        </h2>
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-lg-5 pt-3">
                            {/* További tartalom */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;