import React from 'react'
import classNames from 'classnames'

import styles from './styles.scss'

const Alert = props => {
  const { children, ...rest } = props

  let alertClasses = classNames(styles.alert, {
    [styles.primary]: props.primary,
    [styles.secondary]: props.secondary,
    [styles.success]: props.success,
    [styles.warning]: props.warning,
    [styles.danger]: props.danger
    // [styles.fade]:
  })

  return (
    <div className={alertClasses} {...rest}>
      {children}
    </div>
  )
}

export default Alert
