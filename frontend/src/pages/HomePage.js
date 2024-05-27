import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PopularCourses from '../components/PopularCourses';
import Testimonials from '../components/Testimonials';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import AboutUs from '../components/AboutUs';
import EnrollNow from '../components/EnrollNow';

const HomePage = () => {
    return(
        <div>
           <Hero />
           <Features />
           <PopularCourses />
           <Testimonials />
           <Benefits />
           <HowItWorks />
           <AboutUs />
           <EnrollNow />
        </div>
    )
}

export default HomePage