import Hero from "../components/mainComponents/Hero";
import Features from  "../components/mainComponents/Features";
import PopularCourses from '../components/mainComponents/PopularCourses';
import Testimonials from '../components/mainComponents/Testimonials';
import Benefits from '../components/mainComponents/Benefits';
import HowItWorks from '../components/mainComponents/HowItWorks';
import AboutUs from '../components/mainComponents/AboutUs';
import EnrollNow from '../components/mainComponents/EnrollNow';


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