// @author Jimmy Yang
import Banner from '../components/shared/Banner'
import TextAndPic from '../components/shared/TextAndPic'
import ColourTitle from '../components/ResilienceResource/ColourTitle'

function resilience() {
  return (
    <>
      <Banner
        url="/images/iphone_background_landscape.png"
        title="RESILIENCE RESOURCES"
      />
      <TextAndPic textWidth={6} imageWidth={6} image="/images/resilience_resources.png">
        <div style={{ padding: "200px 0" }}>
          <h2>Maximizing Your Resilience</h2>
          <p className="text-justify">
            There are multiple areas from which we draw our resilience. These include internal resilience, coping pursuits, and external resilience. Below, we provide an overview of how to maximize your resilience.
          </p>
        </div>
      </TextAndPic>

      <ColourTitle
        title="Internal Resilience"
        description="Internal resilience refers to your ability to take care of yourself. Internal resilience can be improved by engaging in behaviours and activities that promote self-care and well-being. A resilient mind and body can act as the stepping stone to allow you to tackle any challenges or goals that may arise. Some suggestions for maximizing your internal resilience can include: "
        foreground="black"
        background="yellow"
      />


    </>
  )
}

export default resilience
