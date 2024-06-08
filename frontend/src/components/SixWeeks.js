import DevelopmentStatistics from "./mainComponents/DevelopmentStatistics"
import EnrollNow from "./mainComponents/EnrollNow"
import Recruiters from "./mainComponents/OurRecruiters"
import FormSection from "./pagesComponents/SixWeeksTraining/FormSection"
import HeroSection from "./pagesComponents/SixWeeksTraining/HeroSection"
import SixWeeksTrainingCourses from "./pagesComponents/SixWeeksTraining/SixWeeksTrainingCourses"
import VideoTestimonials from "./pagesComponents/SixWeeksTraining/VideoTestimonials"
import Why from "./pagesComponents/SixWeeksTraining/Why"

const SixWeeks = () => {
    return (
        <div>
            <HeroSection />
            <FormSection />
            <SixWeeksTrainingCourses />
            <Why />
            <Recruiters />
            <VideoTestimonials />
            <DevelopmentStatistics />
            <EnrollNow />
        </div>
    )
}

export default SixWeeks