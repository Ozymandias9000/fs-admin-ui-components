import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PaginationButton from '../PaginationButton'
import styles from './styles.scss'

class PageNav extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array)
  }

  state = {
    pageCount: 0,
    activePage: 0,
    loading: true
  }

  handleClick = e => {
    // TODO
    // Link to new page
  }

  componentDidMount() {
    // TODO if page count is not known, query
    // & adjust accordingly
  }

  render() {
    const {
      handleClick,
      props: { children, ...rest },
      state: { pageCount }
    } = this

    return (
      <nav className={styles.pageNav} {...rest}>
        <PaginationButton>Previous</PaginationButton>

        {/* TODO
      /
      / 1) mapping function needs to adapt for pageCount
      / 2) consider nesting link inside PaginationButton
      / 3) disable previous/next if no previous/next
      /
      */}

        {children &&
          children.map(child => {
            const { label } = child.props

            return (
              <PaginationButton
                className={styles.pageNum}
                key={label}
                label={label}
                onClick={handleClick}
              >
                {label}
              </PaginationButton>
            )
          })}

        <PaginationButton>Next</PaginationButton>
      </nav>
    )
  }
}

export default PageNav
