import Link from 'next/link'

import styles from '../styles/Button.module.css'

function Button(props) {
  const purpleWhite = (
    <Link href={props.link}>
      <a className={styles.link}>
        <div className={`${styles.container} ${styles.purpleWhite}`}>
          {props.children}
        </div>
      </a>
    </Link>
  )

  const whitePurple = (
    <Link href={props.link}>
      <a className={styles.link}>
        <div className={`${styles.container} ${styles.whitePurple}`}>
          {props.children}
        </div>
      </a>
    </Link>
  )

  if (props.type == 'purpleWhite') {
    return purpleWhite
  } else if (props.type == 'whitePurple') {
    return whitePurple
  }
}

export default Button
