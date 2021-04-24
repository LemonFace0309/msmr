/* @author Charles Liu */

import Image from 'next/image'

import styles from './Banner.module.css'

/**
 * Creates a banner component
 * @param {string} url - is the url source of the image
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
        priority
      />
      {title ? (
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
      ) : null}
    </div>
  )
}

export default Banner
