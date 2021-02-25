// @author Jimmy Yang
import React from 'react'
import styles from './ColourBox.module.css'

/**
 * ColourBox is a colourful box
 *
 * @param {title} - title of box
 * @param {points} - array of bullet points
 * @param {foreground} - CSS value of foreground colour
 * @param {background} - CSS value of background colour
 * @param {width} - px width of each box
 * @param {height} - px height of each box
 * @param {margin} - px margin of each box
 */
function ColourBox({
  title,
  points,
  foreground,
  background,
  width,
  height,
  margin,
}) {
  return (
    <div
      style={{
        backgroundColor: background,
        width: width,
        height: height,
        margin: `5px ${margin}px`,
      }}
      className={styles.ColourBox}
    >
      <h2 style={{ color: foreground }}> {title} </h2>
      <ul>
        {points.map((point) => {
          return <li> {point} </li>
        })}
      </ul>
    </div>
  )
}

export default ColourBox
