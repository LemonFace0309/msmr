/* @author Charles Liu */

import Image from 'next/image'

import styles from './Banner.module.css'


/**
 * Creates a banner component
 * @param {string} url - is the url of the image
 * @param {string} title - title of the banner 
 */ 
function Banner({ url, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <Image
        src={url}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
      />
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Banner
