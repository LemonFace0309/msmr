import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  {
    /* <footer className="row px-5 mx-5 py-5">
      <div className="col-lg-6 px-5">
        <h2>MSMR Tool</h2>
        <p>
          The MSMR digital application provides an opportunity for users to
          engage and learn about their personal resilience capacity – where they
          stand, and how they can improve their resilience.
        </p>
      </div>
      <div className="col-lg-6 px-5">
        <h3>Contact Us</h3>
        <p>example@domain.com</p>
        <p>(XXX) XXX-XXXX</p>
        <div>
          <a>
            <img className={styles.icon} src="/icons/Twitter.png"></img>
          </a>
          <a>
            <img className={styles.icon} src="/icons/Linkedin.png"></img>
          </a>
          <a>
            <img className={styles.icon} src="/icons/Instagram.png"></img>
          </a>
          <a>
            <img className={styles.icon} src="/icons/Facebook.png"></img>
          </a>
        </div>
      </div>
    </footer> */
  }
  return (
    <footer className="row px-5 mx-5 py-5">
      <div className="container">
        <div className="float-right">
          <a>
            <img className={styles.icon} src="/icons/Twitter.png"></img>
          </a>
          <a>
            <img className={styles.icon} src="/icons/Linkedin.png"></img>
          </a>
          <a>
            <img className={styles.icon} src="/icons/Instagram.png"></img>
          </a>
          <a>
            <img className={styles.icon} src="/icons/Facebook.png"></img>
          </a>
        </div>

        <p>© 2019-2021 MSMR Tool</p>
        <a className="float-right" href="#">
          back to top
        </a>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
