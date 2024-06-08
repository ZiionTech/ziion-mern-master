
import ContactNow from "../components/ContactNow";
import Trainings from "../components/mainComponents/Trainings"
import TrainingPageHero from "../components/pagesComponents/TrainingsPage/TrainingPageHero";

const TrainingPage = () => {
    return (
        <div>
            <TrainingPageHero />
            <Trainings />
            <ContactNow />
            
        </div>
    )
}

export default TrainingPage;