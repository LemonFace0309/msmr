// @author Charles Liu

import Link from 'next/link'

import styles from './Button.module.css'


// type == 'purpleWhite' || type == 'whitePurple. Colour order reflects background colour -> text colour.
// link is a url string to the target designation
function Button({type, link, children}) {
  let classes = [styles.container]

  if (type == 'purpleWhite') {
    classes.push(styles.purpleWhite)
  } else if (type == 'whitePurple') {
    classes.push(styles.whitePurple)
  }
  classes = classes.join(' ')

  return (
    <Link href={link}>
      <a className={styles.link}>
        <div className={classes}>
          {children}
        </div>
      </a>
    </Link>
  )
}

export default Button
