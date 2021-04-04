import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  const date = new Date()
  return (
    <footer className="row mx-5 py-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-center">© 2019-{date.getFullYear()} MSMR Tool</p>
          <div className={styles.Icons}>
            <a href="https://twitter.com/resilient_u">
              <i className="mx-2 fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/jenny-jw-liu-a7604846/">
              <i className="mx-2 fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/resilient.u/">
              <i className="mx-2 fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/RUResilient">
              <i className="mx-2 fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div className="my-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <Link href="/privacy">
                <a>Privacy</a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="/terms">
                <a>Terms</a>
              </Link>
            </li>
          </ul>
          <a href="#">back to top</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
