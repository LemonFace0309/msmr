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
 * @param {format} - one of ['points', 'paragraphs']
 */
function ColourBox({ title, points, foreground, background, margin, format }) {
  let content
  if (format === 'points') {
    content = (
      <ul>
        {points.map((point, i) => {
          return <li key={i}> {point} </li>
        })}
      </ul>
    )
  } else if (format === 'paragraphs') {
    content = points.map((point, i) => {
      return <p key={i}> {point} </p>
    })
  }

  return (
    <div
      style={{
        backgroundColor: background,
        margin: `5px ${margin}px`,
      }}
      className={styles.ColourBox}
    >
      <h2 style={{ color: foreground }}> {title} </h2>
      {content}
    </div>
  )
}

export default ColourBox
