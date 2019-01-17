import React from 'react'
import PropTypes from 'prop-types'

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

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array.isRequired
}

export default Button
