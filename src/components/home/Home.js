import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Gallery from './Gallery';
import Vision from './Vision';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
           <Vision></Vision>
        </div>
    );
};

export default Home;