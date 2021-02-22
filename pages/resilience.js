// @author Jimmy Yang
import Banner from '../components/shared/Banner'
import TextAndPic from '../components/shared/TextAndPic'
import CovidBanner from '../components/ResilienceResource/CovidBanner'

function resilience() {
  return (
    <div>
      <Banner
        url="/images/iphone_background_landscape.png"
        title="RESILIENCE RESOURCES"
      />
      <TextAndPic textWidth={6} imageWidth={6} image="/images/resilience_resources.png">
        <div style={{ padding: "200px 0"}}>
          <h2>Maximizing Your Resilience</h2>
          <p className="text-justify">
            There are multiple areas from which we draw our resilience. These include internal resilience, coping pursuits, and external resilience. Below, we provide an overview of how to maximize your resilience.
          </p>
        </div>
      </TextAndPic>


      <CovidBanner />
    </div>
  )
}

export default resilience
