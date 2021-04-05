// @author Charles Liu

import styles from '../styles/Research.module.css'
import Banner from '../components/shared/Banner'
import TextAndPic from '../components/shared/TextAndPic'
import OngoingProjects from '../components/Research/OngoingProjects'
import Publications from '../components/Research/Publications'
import Title from '../components/Title'

function research() {
  return (
    <div>
      <Banner
        url="/images/iphone_background_landscape.png"
        title="Research and Publications"
      />
      <div className="container">
        <TextAndPic
          textWidth={6}
          imageWidth={6}
          image="/images/resilience modal.jpg"
        >
          <Title title="Model Development" position="start" />
          <p>
            The Multi-System Model of Resilience (MSMR) conceptualizes
            resilience as a multidimensional capacity to respond to challenges
            across different domains. The MSMR was first introduced as a
            theoretical, multi-dimensional model in response to the limitations
            in existing literature regarding the ambiguities in defining
            resilience and the lack of multi-dimensionality in understanding
            resilience (Liu, Reed, & Girard, 2017).
          </p>
          <p>
            Following the publication, our team of researchers have developed an
            accompanying self-reported inventory (MSMR-Inventory) to measure the
            theoretical model. The resulting MSMR-I is a 27-items, self-reported
            scale scored on a 4-point Likert-type measure.
          </p>
        </TextAndPic>
        <TextAndPic textWidth={12}>
          <p>
            We have conducted studies to validate and examine the factor
            structure and psychometric properties of MSMR-I in several
            populations. Psychometric properties of the MSMR-I and its
            associated subscales showed good reliability, and construct validity
            and criterion validity support its three-systems factor structure
            and relationship to functional outcomes of depression, anxiety, and
            stress.
          </p>
          <p>
            The MSMR-I consists of three subscales: internal resilience, coping
            pursuits, and external resilience. Each subscale contains 9
            self-reported items, and can be used and interpreted independently
            of the other subscales. The MSMR-I is unique in that it can be used
            as an assessment tool to best capture where barriers to one’s
            resilience may lie. For details on how to use and interpret the
            MSMR-I, please contact us for access to user manual.
          </p>
        </TextAndPic>
      </div>
      <OngoingProjects />
      <Publications />
    </div>
  )
}

export default research
