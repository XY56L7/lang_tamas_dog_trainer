import React from 'react';

const TopBar = () => {
    return (
        <div className="container-fluid border-bottom d-none d-lg-block">
            <div className="row gx-0">
                <div className="col-lg-4 text-center py-2">
                    <div className="d-inline-flex align-items-center">
                        <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                        <div className="text-start">
                            <h6 className="text-uppercase mb-1">Budapest és környéke</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-center border-start border-end py-2">
                    <div className="d-inline-flex align-items-center">
                        <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                        <div className="text-start">
                            <h6 className="text-uppercase mb-1">Email cím</h6>
                            <span>info@example.com</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-center py-2">
                    <div className="d-inline-flex align-items-center">
                        <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                        <div className="text-start">
                            <h6 className="text-uppercase mb-1">Hívj fel még ma</h6>
                            <span>                   +36 70 624 4713
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;