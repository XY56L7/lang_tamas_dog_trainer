import React from 'react';
import TopBar from './TopBar'; 
import Header from './Header'; 
import Hero from './Hero'; 
import About from './About';
import Services from './Services'; 

import Footer from './Footer'; 
import './styles.css';
import Pricing from './Pricing';

const App = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <Hero />
            <About />
            <Services />
            <Pricing/>
            <Footer />
        </div>
    );
};

export default App;