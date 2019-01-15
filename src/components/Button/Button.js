import React from 'react'

import styles from './styles.scss'

const Button = props => {
  const { children, className, ...rest } = props
  return (
    <button
      className={
        className ? `${styles.button} ${className}` : `${styles.button}`
      }
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
