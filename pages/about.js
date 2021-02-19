/* @author Charles Liu */

import Image from 'next/image'

import styles from '../styles/About.module.css'
import Banner from '../components/shared/Banner'
import TextAndPic from '../components/shared/TextAndPic'
import Acknowledgements from '../components/About/Acknowledgements'

function about({ partners }) {
  return (
    <div>
      <Banner
        url="/images/iphone_background_landscape.png"
        title="ABOUT MSMR"
      />
      <TextAndPic textWidth={8} imageWidth={4} image="/logo.png">
        <div>
          <h2>Using the MSMR</h2>
          <p>
            The Multi-System Model of Resilience (MSMR) is a copyright-protected
            and empirically-validated, multi-dimensional model and measure of
            resilience capacity across different areas in your life. For more
            information on the process of validation, see researching
            resilience. The MSMR digital application provides an opportunity for
            users to engage and learn about their personal resilience capacity –
            where they stand, and how they can improve their resilience.
          </p>
          <p>
            For organizations, scholars, and/or service providers, this digital
            assessment application can be used to measure and track resilience,
            with instant feedback provided on individual resilience results.
            Users can export results confidentially and anonymously, if needed.
          </p>
          <p>
            In addition, we can offer tailored feedback regarding aggregate data
            collected using the MSMR in relation to onboarding, program
            evaluations, and service utilization through our consultation
            services, as well as customize application builds to serve the needs
            of different organizations. To inquire about the use of the MSMR,
            please contact us.
          </p>
        </div>
      </TextAndPic>
      <TextAndPic
        textWidth={8}
        imageWidth={4}
        image="/images/portrait.jpg"
        isImageFirst={true}
      >
        <div className={styles.bioTextWrapper}>
          <h2>Author and Creator</h2>
          <p>
            Dr. Liu is the creator and lead author of the Multi-System Model of
            Resilience (MSMR). She is a Postdoctoral Research Fellow in
            Psychiatry at the Toronto Western Hospital-Krembil Research
            Institute, University Health Network, and a Postdoctoral Fellow
            within Urban Health Equity Research at the Daphne Cockwell School of
            Nursing, Ryerson University. Dr. Liu is also an elected board member
            of the Society for the Study of Psychiatry and Culture, an
            international organization devoted to fostering cultural aspects of
            mental health and illness. Dr. Liu’s background is in psychological
            science, and her scholarship activities bridge research in stress
            and resilience with community-based applications. Dr. Liu has
            received several grants and awards to fund the development and
            validation of the model and measure of resilience, including the
            digitization of this measure. She is the recipient of several
            prestigious awards, including the American Psychological
            Association’s Dissertation Award, the Psychology Foundation of
            Canada / Canadian Psychological Association Research Award, the
            Ryerson Gold Medal, and the Board of Governor’s Leadership Award.
            The model and tool are currently used in several multi-year projects
            around the world.
          </p>
        </div>
      </TextAndPic>
      <Acknowledgements title="Collaborators and Partners" people={partners} />
    </div>
  )
}

export default about

about.defaultProps = {
  partners: {
    one: {
      name: 'Dr. Maureen Reed',
      titles: ['Professor, Ryerson University'],
    },
    two: {
      name: 'Dr. Kenneth Fung',
      titles: [
        'Clinical Director',
        'Asian Initiatives in Mental Health',
        'Toronto Western Hospital',
        '---------------------------------',
        'Associate Professor, University of Toronto',
      ],
    },
    three: {
      name: 'Dr. Josephine Wong',
      titles: [
        'Professor and Research Chair in Urban Health',
        'Ryerson University',
      ],
    },
    four: {
      name: 'Dr. Todd Girard',
      titles: ['Associate Professor', 'Ryerson University'],
    },
  },
}
