import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  const date = new Date()
  return (
    <footer className="row mx-5 py-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-center">© 2019-{date.getFullYear()} MSMR Tool</p>
          <div className={styles.Icons}>
            <a href="https://twitter.com/resilient_u">
              <i class="mx-2 fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/jenny-jw-liu-a7604846/">
              <i class="mx-2 fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/resilient.u/">
              <i class="mx-2 fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/RUResilient">
              <i class="mx-2 fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div className="my-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <ul className="list-inline text-center">
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
          <a href="#">back to top</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
