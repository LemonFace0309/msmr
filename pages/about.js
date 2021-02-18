/* @author Charles Liu */

import Banner from '../components/shared/Banner'
import TextAndPic from '../components/Shared/TextAndPic'

function about() {
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
    </div>
  )
}

export default about
