import React from 'react';
import TopBar from './TopBar'; 
import Header from './Header'; 
import Hero from './Hero'; 
import About from './About';
import Services from './Services'; 

import Footer from './Footer'; 
import './styles.css';

const App = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <Hero />
            <About />
            <Services />
            <Footer />
        </div>
    );
};

export default App;