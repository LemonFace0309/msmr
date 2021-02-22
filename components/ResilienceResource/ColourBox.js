// @author Jimmy Yang
import React from 'react'
import styles from './ColourBox.module.css'

function ColourBox({ title, points, foreground, background, width, height, margin }) {
  return (
    <div
      style={{ backgroundColor: background, width: width, height: height, margin: `5px ${margin}px` }}
      className={styles.ColourBox}>
      <h2 style={{ color: foreground }}> {title} </h2>
      <ul>
        {points.map(point => {
          return (
            <li> { point } </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ColourBox