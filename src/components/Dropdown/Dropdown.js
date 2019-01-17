import React from 'react'
import PropTypes from 'prop-types'
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

Dropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array.isRequired
}

export default Dropdown
