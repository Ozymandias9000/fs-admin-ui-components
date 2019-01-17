import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

const Tab = props => {
  const { label, activeTab, onClick } = props

  const handleClick = () => {
    onClick(label)
  }

  return (
    <li
      className={
        activeTab === label ? `${styles.listItemActive}` : `${styles.listItem}`
      }
      onClick={handleClick}
    >
      {label}
    </li>
  )
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tab
