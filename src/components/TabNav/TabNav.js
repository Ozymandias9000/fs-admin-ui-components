import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'
import Tab from './Tab/Tab'

class TabNav extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  }

  state = {
    activeTab: this.props.children[0].props.label
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab })
  }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this

    return (
      <ul className={styles.tabNav}>
        {children.map(child => {
          const { label } = child.props

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          )
        })}
      </ul>
    )
  }
}

export default TabNav
