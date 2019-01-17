import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

const Thumbnail = props => {
  const { image, alt, className, ...rest } = props

  return (
    <img
      className={
        className ? `${styles.thumbnail} ${className}` : `${styles.thumbnail}`
      }
      src={image}
      alt={alt}
      {...rest}
    />
  )
}

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Thumbnail
