// @author Jimmy Yang
import React from 'react'
import styles from '../../styles/ColourTitle.module.css'

// ColourTitle is a colourful boxed title
// @param { title } - The title
// @param { description } - The description for the title
// @param { foreground } - CSS value colour for foreground
// @param { background } - CSS value colour for background
function ColourTitle({ title, description, foreground, background}) {
  return (
    <div className={styles.ColourTitle} style={{ backgroundColor: background }}>
      <h1 style={{ color: foreground }}> { title } </h1>
      <p style={{ color: foreground }}> { description } </p>
    </div>
  )
}

export default ColourTitle