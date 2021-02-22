// @author Charles Liu

import Image from 'next/image'

import styles from './Funder.module.css'

function Funder({ url, caption }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={url} layout="fill" objectFit="contain" />
      </div>
      <p>{caption}</p>
    </div>
  )
}

export default Funder
