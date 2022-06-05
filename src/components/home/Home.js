import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;