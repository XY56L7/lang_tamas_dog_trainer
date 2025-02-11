import React from 'react';

const Pricing = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: '600px' }}>
                    <h6 className="text-primary text-uppercase">Pricing Plan</h6>
                    <h1 className="display-5 text-uppercase mb-0">Competitive Pricing For Pet Services</h1>
                </div>
                <div className="row g-5">
                    {[
                        { title: 'Basic', price: 49, features: ['HTML5 & CSS3', 'Bootstrap v5'], excluded: ['Responsive Layout', 'Browsers Compatibility'] },
                        { title: 'Standard', price: 99, features: ['HTML5 & CSS3', 'Bootstrap v5', 'Responsive Layout'], excluded: ['Browsers Compatibility'] },
                        { title: 'Extended', price: 149, features: ['HTML5 & CSS3', 'Bootstrap v5', 'Responsive Layout', 'Browsers Compatibility'] },
                    ].map((plan, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className={`bg-light text-center pt-5 ${index === 1 ? '' : 'mt-lg-5'}`}>
                                <h2 className="text-uppercase">{plan.title}</h2>
                                <h6 className="text-body mb-5">The Best Choice</h6>
                                <div className={`text-center ${index === 1 ? 'bg-dark' : 'bg-primary'} p-4 mb-2`}>
                                    <h1 className="display-4 text-white mb-0">
                                        <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>
                                        {plan.price}
                                        <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Mo</small>
                                    </h1>
                                </div>
                                <div className="text-center p-4">
                                    {plan.features.map((feature, i) => (
                                        <div className="d-flex align-items-center justify-content-between mb-1" key={i}>
                                            <span>{feature}</span>
                                            <i className="bi bi-check2 fs-4 text-primary"></i>
                                        </div>
                                    ))}
                                    {plan.excluded?.map((excluded, i) => ( // Opcionális láncolás
                                        <div className="d-flex align-items-center justify-content-between mb-1" key={i}>
                                            <span>{excluded}</span>
                                            <i className="bi bi-x fs-4 text-danger"></i>
                                        </div>
                                    ))}
                                    <a href="" className="btn btn-primary text-uppercase py-2 px-4 my-3">Order Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;