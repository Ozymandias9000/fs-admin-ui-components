import React from 'react'

import styles from './styles.scss'

const PaginationButton = props => {
  const { next, prev } = props
  return (
    <button className={styles.button}>
      {prev && '<-'} {next && '->'}
    </button>
  )
}

export default PaginationButton
