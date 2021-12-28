import styles from './BigStat.module.css'

/**
 * @param {React.Component } children - should be the text contained within
 * @param {String} bigStat
 * @param {String} title
 */
const BigStat = ({ stat, title, children }) => {
  return (
    <div className={styles.BigStat}>
      <h1>{stat}</h1>
      <h4>{title}</h4>
      {children}
    </div>
  )
}

export default BigStat
