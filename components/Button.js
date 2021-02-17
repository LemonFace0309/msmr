// @author Charles Liu

import Link from 'next/link'

import styles from '../styles/Button.module.css'

function Button(props) {
  let classes = [styles.container]

  if (props.type == 'purpleWhite') {
    classes.push(styles.purpleWhite)
  } else if (props.type == 'whitePurple') {
    classes.push(styles.whitePurple)
  }
  classes = classes.join(' ')
  console.log(classes)

  return (
    <Link href={props.link}>
      <a className={styles.link}>
        <div className={classes}>
          {props.children}
        </div>
      </a>
    </Link>
  )
}

export default Button
