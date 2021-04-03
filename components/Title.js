// @author Jimmy Yang
import React from 'react'
import styles from '../styles/Title.module.css'

// Title is a title
// @param title - title of Title
// @param position - position of blue underline; one of [start, middle]
export default function Title({ title, position }) {
  let titleStyle = []
  if (position === 'start') {
    titleStyle.push(styles.TitleStart)
  } else if (position == 'middle') {
    titleStyle.push(styles.TitleMiddle)
  }
  titleStyle = titleStyle.join(' ')

  return <h1 className={titleStyle}>{title}</h1>
}
