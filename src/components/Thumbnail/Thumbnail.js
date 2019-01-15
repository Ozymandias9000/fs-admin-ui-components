import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

export default class Thumbnail extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }

  render() {
    const { image, alt } = this.props

    return <img className={styles.image} src={image} alt={alt} />
  }
}
