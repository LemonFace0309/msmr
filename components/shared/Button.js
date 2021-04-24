// @author Charles Liu

import Link from 'next/link'

import styles from './Button.module.css'

/**
 * Creates a banner component
 * @param {string} type - type == 'purpleWhite' || type == 'whitePurple. Colour order reflects background colour -> text colour.
 * @param {string} link - link to target designation
 * @param {Boolean} disabled - true if button should be disabled
 * @param {Boolean} newTab - true if button should be opened in a new tab
 * @param {React.Component} children - children element
 */
function Button({ type, link, disabled, newTab, children }) {
  let classes = [styles.container]

  if (type == 'purpleWhite') {
    classes.push(styles.purpleWhite)
  } else if (type == 'whitePurple') {
    classes.push(styles.whitePurple)
  }
  if (disabled) {
    classes.push(styles.disabled)
  }
  classes = classes.join(' ')

  if (newTab) {
    return (
      <Link href={link}>
        <a className={styles.link} target="_blank">
          <div className={classes}>{children}</div>
        </a>
      </Link>
    )
  }

  return (
    <Link href={link}>
      <a className={styles.link}>
        <div className={classes}>{children}</div>
      </a>
    </Link>
  )
}

export default Button
