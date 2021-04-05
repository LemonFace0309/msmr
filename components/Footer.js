import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
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
      </div>
    </footer>
  )
}

export default Footer
