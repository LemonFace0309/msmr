// @author Jimmy Yang
import React from 'react'
import TextAndPic from '../shared/TextAndPic'
import styles from './CovidBanner.module.css'

function CovidBanner() {
  return (
    <div className={styles.CovidBanner}>
      <TextAndPic textWidth={6} imageWidth={6} image="/images/covidbanner.png">
        <h1> RESILIENCE DURING COVID-19 </h1>
        <p>
          {' '}
          Amidst the COVID-19 pandemic, and during moments of uncertainty,
          change, and distress, it is important to take care of our mental
          health and maintain our resiliency. The Multi-System Model of
          Resilience has been adapted into a community resilience-building
          project to support the Chinese-Canadian and affected communities. To
          learn more and receive personalized suggestions for increasing
          resilience capacity in English, Chinese-Simplified, and
          Chinese-Traditional, visit our Project PROTECH website: <br />{' '}
          https://projectprotech.ca/test/resilience/.{' '}
        </p>
      </TextAndPic>
    </div>
  )
}

export default CovidBanner
