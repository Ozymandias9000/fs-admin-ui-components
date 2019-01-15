import React from 'react'

import styles from './styles.scss'

const Dropdown = props => {
  const { children, className, ...rest } = props
  return (
    <select
      className={
        className ? `${styles.select} ${className}` : `${styles.select}`
      }
      {...rest}
    >
      {children.map(child => {
        const { option, children } = child.props

        return (
          <option value={option} key={option}>
            {children}
          </option>
        )
      })}
    </select>
  )
}

export default Dropdown
