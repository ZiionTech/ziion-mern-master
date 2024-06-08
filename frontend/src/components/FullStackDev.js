
import FormSectionFullStack from "./pagesComponents/FullStackPage/FormSectionFullStack";
import FullStackHero from "./pagesComponents/FullStackPage/FullStackHero";
import WhyChoose from "./pagesComponents/FullStackPage/WhyChoose";
import FullStackHow from "./pagesComponents/FullStackPage/FullStackHow";
import SyllabusFS from "./pagesComponents/FullStackPage/FullStackSyllabus";
import Recruiters from "../components/mainComponents/OurRecruiters";
import JobOpportunities from "./pagesComponents/JobOpportunities";
import ContactNow from "./ContactNow";
import OurGallery from "./mainComponents/OurGallery";

const FullStackDev = () => {
    

    return (
        <div>
            <FullStackHero />
            <FormSectionFullStack />
            <WhyChoose />
            <FullStackHow />

            <SyllabusFS />
            <Recruiters />
            <JobOpportunities />
            <ContactNow />
            <OurGallery />

            
        </div>
    )
}

export default FullStackDev;