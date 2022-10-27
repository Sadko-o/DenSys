import React from 'react';
import HomeHeader from '../../headers/HomeHeader';
import Footer from './Footer';
import Hero from './Hero';
import Services from './Services';

const Home = () => {
    return (
        <>
        <HomeHeader/>
        <Hero/>
        <Services/>
        <Footer/>
        </>
    );
};

export default Home;