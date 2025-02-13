import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className="pricing-section" id='prices-section'>
            <div className="container">
                <div className="text-center mb-5">
                    <h6 style={{ color: '#7AB730' }} className="text-uppercase">Árazás</h6>
                    <h1 className="display-5 text-uppercase mb-0">Tréningcsomagjaink</h1>
                </div>

                <div className="row">
                    {/* 1 órás tréning */}
                    <div className="col-md-4">
                        <div className="pricing-card">
                            <h3>1 órás tréning</h3>
                            <h2>10.000 Ft</h2>
                            <ul>
                                <li>Egyéni tréning</li>
                                <li>Alapok fejlesztése</li>
                                <li>1 óra időtartam</li>
                            </ul>
                            <button>Jelentkezem</button>
                        </div>
                    </div>

                    {/* 4 alkalmas csomag */}
                    <div className="col-md-4">
                        <div className="pricing-card">
                            <h3>4 alkalmas csomag</h3>
                            <h2>36.000 Ft</h2>
                            <ul>
                                <li>4 egyéni tréning</li>
                                <li>Személyre szabott program</li>
                                <li>Kedvezményes ár</li>
                            </ul>
                            <button>Jelentkezem</button>
                        </div>
                    </div>

                    {/* 8 alkalmas csomag */}
                    <div className="col-md-4">
                        <div className="pricing-card">
                            <h3>8 alkalmas csomag</h3>
                            <h2>70.000 Ft</h2>
                            <ul>
                                <li>8 egyéni tréning</li>
                                <li>Teljes körű fejlesztés</li>
                                <li>Legjobb ár</li>
                            </ul>
                            <button>Jelentkezem</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;