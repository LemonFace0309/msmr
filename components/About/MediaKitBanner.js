// @author Charles Liu
import React from 'react'
import BigStat from './BigStat'
import styles from './MediaKitBanner.module.css'

const MediaKitBanner = () => {
  return (
    <div className={styles.MediaBanner}>
      <div className={styles.BigStatContainer}>
        <BigStat stat="20k+" title="App Impresions">
          <p>Data recorded since the launch of MSMR app in 2019</p>
        </BigStat>
        <BigStat stat="92" title="Knowledge Transfer Products">
          <p>
            Including invited talks, workshops, presentations, and 29 journal
            publications
          </p>
        </BigStat>
        <BigStat stat="22" title="Awards and Honours">
          <p>Including Gold Medal and Board of Governor's Leadership Medal</p>
        </BigStat>
      </div>
      <div className={styles.DownloadBox}>
        <a href="/files/JWL Media Kit[2655].pdf" download>
          <p>Check out my media kit</p>
          <span> 👉</span>
        </a>
      </div>
    </div>
  )
}

export default MediaKitBanner
