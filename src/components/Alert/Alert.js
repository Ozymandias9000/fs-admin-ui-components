import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

// TODO
// Decide between coding our own alerts
// or using react-toastify

const Alert = props => {
  const { children, ...rest } = props

  let alertClasses = classNames(styles.alert, {
    [styles.primary]: props.primary,
    [styles.secondary]: props.secondary,
    [styles.success]: props.success,
    [styles.warning]: props.warning,
    [styles.danger]: props.danger
  })

  return (
    <div className={alertClasses} {...rest}>
      {children}
    </div>
  )
}

export default Alert
