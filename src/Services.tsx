import React from 'react';

const Services = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div style={{ borderLeft: '5px solid #7AB730' }} className="ps-5 mb-5">
                    <h6 style={{ color: '#7AB730' }} className="text-uppercase">Szolgáltatások</h6>
                    <h1 className="display-5 text-uppercase mb-0">Kutyatréning és Gondozási Szolgáltatások</h1>
                </div>
                <div className="row g-5">
                    {[
                        { icon: 'flaticon-house', title: 'Kezdő Tréning 🦴', description: 'Stabil alapok a kutyával való kapcsolathoz. Együttműködés, figyelem, laza pórázon sétálás, alap parancsok.' },
                        { icon: 'flaticon-food', title: 'Viselkedés Tréning 🦴', description: 'Problémás viselkedés kezelése: ugrás, húzás, túlzott ugatás. Személyre szabott megoldások.' },
                        { icon: 'flaticon-grooming', title: 'Kutyasuli 🦴', description: 'Csoportos tréning, szocializáció, játék és tanulás együtt. Min. 4, max. 12 résztvevő.' },
                        { icon: 'flaticon-cat', title: 'Klikker Tréning 🦴', description: 'Pozitív megerősítés alapján: klikker használata, trükkök tanítása, közös játék.' },
                        { icon: 'flaticon-dog', title: 'Egyéni Tréning 🦴', description: 'Egyedi igényekre szabott tréningprogramok. Otthoni vagy terepbeli tréning.' },
                        { icon: 'flaticon-vaccine', title: 'Tanácsadás 🦴', description: 'Kutyakommunikáció, tudatos döntéshozatal, viselkedési problémák megoldása.' },
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