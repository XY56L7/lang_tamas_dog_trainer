import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('services-section');
            // Null check before using getBoundingClientRect
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setIsVisible(true); // Element is in view
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div style={{ borderLeft: '5px solid #7AB730' }} className="ps-5 mb-5">
                    <h6 style={{ color: '#7AB730' }} className="text-uppercase">Lorem Ipsum</h6>
                    <h1 className="display-5 text-uppercase mb-0">Lorem Ipsum Dolor Sit Amet</h1>
                </div>

                <div className={`row g-5 ${isVisible ? 'fade-in' : ''}`} id="services-section">
                    {[ 
                        { icon: 'flaticon-house', title: 'Lorem Ipsum 🦴', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                        { icon: 'flaticon-food', title: 'Lorem Ipsum 🦴', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                        { icon: 'flaticon-grooming', title: 'Lorem Ipsum 🦴', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                        { icon: 'flaticon-cat', title: 'Lorem Ipsum 🦴', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                        { icon: 'flaticon-dog', title: 'Lorem Ipsum 🦴', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                        { icon: 'flaticon-vaccine', title: 'Lorem Ipsum 🦴', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                    ].map((service, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="service-item bg-light d-flex p-4">
                                <i className={`${service.icon} display-1 text-primary me-4`}></i>
                                <div>
                                    <h5 className="text-uppercase mb-3">{service.title}</h5>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;