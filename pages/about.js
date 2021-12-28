/* @author Charles Liu */

import Image from 'next/image'

import styles from '../styles/About.module.css'
import Banner from '../components/shared/Banner'
import TextAndPic from '../components/shared/TextAndPic'
import Acknowledgements from '../components/About/Acknowledgements'

function about({ partners, researchers, techSupport, funderImages }) {
  return (
    <section>
      <Banner
        url="/images/iphone_background_landscape.jpg"
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
            Dr. Jenny Liu is a Postdoctoral Associate with the MacDonald
            Franklin OSI Research Centre and an Adjunct Research Professor in the
            Department of Psychiatry, Schulich School of Medicine, Western
            University. She also holds appointments with the Toronto Western
            Hospital-Krembil Research Institute, and the Daphne Cockwell School
            of Nursing, Ryerson University. Dr. Liu is an elected board member
            of the Society for the Study of Psychiatry and Culture, an
            international organization devoted to fostering cultural aspects of
            mental health and illness. Dr. Liu’s background is in psychological
            science, and her scholarship activities bridge research in stress
            and resilience with community-based applications. In her work, Dr.
            Liu explores the intersecting biophysiological, psychological, and
            socio-cultural determinants of health and resilience using mixed
            methods approaches and quantitative modelling.
          </p>
        </div>
      </TextAndPic>
      <Acknowledgements title="Collaborators and Partners" people={partners} />
      <Acknowledgements title="Staff Researchers" people={researchers} />
      <Acknowledgements title="Tech Support" people={techSupport} />
      <Acknowledgements
        title="Funders"
        subtitle="The MSMR projects are generously supported by funds from:"
        images={funderImages}
      />
    </section>
  )
}

export default about

about.defaultProps = {
  partners: [
    {
      name: 'Dr. Maureen Reed',
      titles: ['Professor, Ryerson University'],
    },
    {
      name: 'Dr. Kenneth Fung',
      titles: [
        'Clinical Director',
        'Asian Initiatives in Mental Health',
        'Toronto Western Hospital',
        '---------------------------------',
        'Associate Professor, University of Toronto',
      ],
    },
    {
      name: 'Dr. Josephine Wong',
      titles: [
        'Professor and Research Chair in Urban Health',
        'Ryerson University',
      ],
    },
    {
      name: 'Dr. Todd Girard',
      titles: ['Associate Professor', 'Ryerson University'],
    },
  ],
  researchers: [
    {
      name: 'Julia Gervaslo',
      titles: ['MA student, Ryerson University'],
    },
  ],
  techSupport: [
    {
      name: 'Likeable IT Inc',
      titles: [],
    },
    {
      name: 'Cache & Cookies',
      titles: ['Software Development'],
    },
  ],
  funderImages: [
    {
      organization: 'rbc',
      url: '/images/RBC.jpg',
      caption:
        'The Royal Bank of Canada’s Partnership for Change, Inclusion, and Diversity Project Grant',
    },
    {
      organization: 'cpa',
      url: '/images/CPA.jpg',
      caption: 'Canadian Psychological Association Student Research Grant',
    },
    {
      organization: 'CIHR',
      url: '/images/sponsors/cihr-logo.jpg',
      caption: 'Canadian Institutes of Health Research',
    },
  ],
}
