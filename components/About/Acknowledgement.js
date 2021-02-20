// @author Charles Liu

import styles from './Acknowledgement.module.css'

function Acknowledgement({ name, titles }) {
  const positions = titles.map((title) => <p>{title}</p>)

  return (
    <div className={styles.container}>
      <h6>{name}</h6>
      {positions}
    </div>
  )
}

export default Acknowledgement
