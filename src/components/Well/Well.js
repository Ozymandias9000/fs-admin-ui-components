import React from 'react'

import styles from './styles.scss'

const Well = props => {
  const { children } = props
  return <div className={styles.well}>{children}</div>
}

export default Well
