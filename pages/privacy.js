// @author Jimmy Yang
import Banner from '../components/shared/Banner'
import Title from '../components/Title'
import { Container } from 'react-bootstrap'

function privacy() {
  return (
    <>
      <Banner
        url="/images/iphone_background_landscape.png"
        title="TERMS AND CONDITIONS"
      />

      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <Title title="Privacy Policy" position="middle" />
        </div>

        <p>Last updated: (May 1, 2019)</p>

        <p>
          {' '}
          The MSMR app is a free to download app for individual users. Responses
          and results are kept confidential and calculated locally on the
          devices of users.
        </p>
        <p>
          {' '}
          All responses on the MSMR application are voluntary. We do not record,
          store, nor use responses through the MSMR app in any way.
        </p>
        <p>
          {' '}
          We are not responsible nor guarantee the safety and security of any
          information you may have entered as a result of an external link you
          may have visited from our website. By using our website/app/inventory,
          you acknowledge and agree to the terms and conditions. If you have any
          questions, please contact us
        </p>
        <p>
          {' '}
          The MSMR Tool (“us”, “we”, or “our”) operates https://www.MSMRtool.com
          (the “Site”). This page informs you of our policies regarding the
          collection, use and disclosure of Personal Information we receive from
          users of the Site.
        </p>
        <p>
          We use your Personal Information only for providing and improving the
          Site. By using the Site, you agree to the collection and use of
          information in accordance with this policy.{' '}
        </p>

        <ul>
          <li> Information Collection And Use</li>
          <p>
            {' '}
            While using our Site, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you. Personally identifiable information may include, but
            is not limited to your name (“Personal Information”).
          </p>

          <li> Log Data</li>
          <p>
            {' '}
            Like many site operators, we collect information that your browser
            sends whenever you visit our Site (“Log Data”).
          </p>
          <p>
            {' '}
            This Log Data may include information such as your computer’s
            Internet Protocol (“IP”) address, browser type, browser version, the
            pages of our Site that you visit, the time and date of your visit,
            the time spent on those pages and other statistics.
          </p>
          <p>
            {' '}
            In addition, we may use third party services such as Google
            Analytics that collect, monitor and analyze data recorded.
          </p>

          <li> Cookies</li>
          <p>
            {' '}
            Cookies are files with small amount of data, which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            web site and stored on your computer’s hard drive.
          </p>
          <p>
            {' '}
            Like many sites, we use “cookies” to collect information. You can
            instruct your browser to refuse all cookies or to indicate when a
            cookie is being sent. However, if you do not accept cookies, you may
            not be able to use some portions of our Site.
          </p>

          <li> Security </li>
          <p>
            {' '}
            The security of your Personal Information is important to us. While
            we strive to use commercially acceptable means to protect your
            Personal Information, we cannot guarantee its absolute security.
          </p>

          <li> Changes to This Privacy Policy</li>
          <p>
            {' '}
            This Privacy Policy is effective as of (May 1, 2019) and will remain
            in effect except with respect to any changes in its provisions in
            the future, which will be in effect immediately after being posted
            on this page.
          </p>
          <p>
            {' '}
            We reserve the right to update or change our Privacy Policy at any
            time and you should check this Privacy Policy periodically. Your
            continued use of the Service after we post any modifications to the
            Privacy Policy on this page will constitute your acknowledgment of
            the modifications and your consent to abide and be bound by the
            modified Privacy Policy.
          </p>
          <p>
            {' '}
            If we make any material changes to this Privacy Policy, we will
            notify you either through the email address you have provided us, or
            by placing a prominent notice on our website.
          </p>

          <li> Contact Us</li>
          <p>
            {' '}
            If you have any questions about this Privacy Policy, please contact
            us.
          </p>
        </ul>
      </Container>
    </>
  )
}

export default privacy
