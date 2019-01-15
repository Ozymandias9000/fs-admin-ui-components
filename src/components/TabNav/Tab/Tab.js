import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  onClick = () => {
    const { label, onClick } = this.props
    onClick(label)
  }

  render() {
    const {
      onClick,
      props: { activeTab, label }
    } = this

    return (
      <li
        className={
          activeTab === label
            ? `${styles.listItemActive}`
            : `${styles.listItem}`
        }
        onClick={onClick}
      >
        {label}
      </li>
    )
  }
}

export default Tab
