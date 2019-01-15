import React from 'react'

import styles from './styles.scss'

const PaginationButton = props => {
  const { next, prev, children, className, ...rest } = props
  return (
    <button
      className={
        className ? `${styles.button} ${className}` : `${styles.button}`
      }
      {...rest}
    >
      {prev ? '<-' : ''} {children} {next ? '->' : ''}
    </button>
  )
}

export default PaginationButton
