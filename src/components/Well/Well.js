import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

const Well = props => {
  const { children } = props
  return <div className={styles.well}>{children}</div>
}

Well.propTypes = {
  children: PropTypes.array.isRequired
}

export default Well
