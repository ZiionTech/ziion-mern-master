
import FormSectionFullStack from "./pagesComponents/FormSectionFullStack";
import FullStackHero from "./pagesComponents/FullStackHero";
import WhyChoose from "./pagesComponents/WhyChoose";
import FullStackHow from "./pagesComponents/FullStackHow";
import SyllabusFS from "./pagesComponents/FullStackSyllabus";
import Recruiters from "./OurRecruiters";
import JobOpportunities from "./pagesComponents/JobOpportunities";
import ContactNow from "./ContactNow";
import OurGallery from "./OurGallery";

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