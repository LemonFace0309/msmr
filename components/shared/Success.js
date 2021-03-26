import React from 'react'

import styles from './Success.module.css'

/**
 * A success banner that should display after a user successfully submits something.
 * @param {React.Component} children - banner text
 */
function Success({children}) {
  return (
    <div className={styles.container}>
      <h5>{children}</h5>
    </div>
  )
}

export default Success
