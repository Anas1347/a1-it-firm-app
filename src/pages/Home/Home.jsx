import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import Testimonial from '../Testimonial/Testimonial';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <ServicesSection></ServicesSection>
            <Pricing></Pricing>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;