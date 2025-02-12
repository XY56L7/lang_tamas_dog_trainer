import React from 'react';
import './About.css';
import fibi from './fibi3.jpg';

const About = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
                        <div className="position-relative h-100">
                            <img
                                className="position-absolute w-100 h-100 rounded"
                                src={fibi} // Relatív elérési út a public mappából
                                alt="Rólunk"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div style={{ borderLeft: '5px solid #7AB730' }} className="ps-5 mb-5">
                            <h6 style={{ color: '#7AB730' }} className="text-uppercase">Rólunk</h6>
                            <h1 className="display-5 text-uppercase mb-0">Kutyáid boldogsága mindig az első!</h1>
                        </div>
                        <h4 className="text-body mb-4">
                            Célom, hogy kutyáid egészségesek, boldogok és jól neveltek legyenek. Tapasztalatommal és szakértelmemmel segítek abban, hogy a kutyáid a legjobb életet élhessék.
                        </h4>
                        <div className="bg-light p-4">
                        <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
  <li className="nav-item w-50" role="presentation">
    <button
      className="nav-link text-uppercase w-100 active"
      id="pills-1-tab"
      data-bs-toggle="pill"
      data-bs-target="#pills-1"
      type="button"
      role="tab"
      aria-controls="pills-1"
      aria-selected="true"
      style={{ backgroundColor: '#7AB730', color: 'white' }} /* Inline stílus */
    >
      Küldetésem
    </button>
  </li>
  <li className="nav-item w-50" role="presentation">
    <button
      className="nav-link text-uppercase w-100"
      id="pills-2-tab"
      data-bs-toggle="pill"
      data-bs-target="#pills-2"
      type="button"
      role="tab"
      aria-controls="pills-2"
      aria-selected="false"
      style={{ backgroundColor: 'transparent', color: '#7AB730' }} /* Inline stílus */
    >
      Vízióm
    </button>
  </li>
</ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                    <p className="mb-0">
                                        Küldetésem, hogy segítsek a kutyatulajdonosoknak abban, hogy kutyáik jól neveltek, boldogok és egészségesek legyenek. Személyre szabott tréningprogramokkal segítem a kutyák fejlődését, és olyan kapcsolatot építek ki a gazdi és a kutya között, amely életre szól.
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                                    <p className="mb-0">
                                        Vízióm egy olyan közösség létrehozása, ahol minden kutya és gazdija megtalálja a számára legjobb tréninget és támogatást. Célom, hogy a kutyatartás örömteli és stresszmentes legyen mindenki számára, és hogy a kutyák a lehető legjobb életet élhessék.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;