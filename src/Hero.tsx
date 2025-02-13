import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container-fluid hero-header">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-uppercase text-white mb-4"
                        >
                            Láng Tamás
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-white mb-4"
                        >
                            Szakképzett Kutya Trainer
                        </motion.h2>
                        <motion.button
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="btn"
                            onClick={scrollToServices}
                        >
                            Kapcsolatfelvétel
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;