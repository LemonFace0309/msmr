// @author Jimmy Yang
import Banner from '../components/shared/Banner'
import TextAndPic from '../components/shared/TextAndPic'
import ColourBoxSection from '../components/ResourcesAndServices/ColourBoxSection'
import CovidBanner from '../components/ResourcesAndServices/CovidBanner'
import MindfulnessExercises from '../components/ResourcesAndServices/MindfulnessExercises'
import ConsultingServices from '../components/ResourcesAndServices/ConsultingServices'

function resilience() {
  return (
    <>
      <Banner
        url="/images/iphone_background_landscape.jpg"
        title="Resources and Services"
      />
      <TextAndPic
        textWidth={6}
        imageWidth={6}
        image="/images/resilience_resources.jpg"
      >
        <div className="p-1 p-md-5">
          <h2>Maximizing Your Resilience</h2>
          <p className="text-justify">
            There are multiple areas from which we draw our resilience. These
            include internal resilience, coping pursuits, and external
            resilience. Below, we provide an overview of how to maximize your
            resilience.
          </p>
        </div>
      </TextAndPic>
      <ColourBoxSection />
      {/* <CovidBanner /> */}
      {/* <MindfulnessExercises /> */}
      <ConsultingServices />
    </>
  )
}

export default resilience
