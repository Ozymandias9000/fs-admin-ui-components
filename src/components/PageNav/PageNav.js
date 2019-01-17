import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Pagination from 'react-js-pagination'
import styles from './styles.scss'

class PageNav extends Component {
  state = {
    activePage: 0
  }

  handlePageChange = pageNum => this.setState({ activePage: pageNum })

  render() {
    const {
      props: {
        itemsCountPerPage,
        totalItemsCount,
        pageRangeDisplayed,
        className,
        ...rest
      },
      state: { activePage },
      handlePageChange
    } = this

    return (
      <nav
        className={
          className ? `${styles.pageNav} ${className}` : `${styles.pageNav}`
        }
      >
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={pageRangeDisplayed}
          onChange={handlePageChange}
          activeLinkClass={styles.activeLink}
          disabledClass={styles.disabled}
          innerClass={styles.pagination}
          {...rest}
        />
      </nav>
    )
  }
}

PageNav.propTypes = {
  itemsCountPerPage: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  pageRangeDisplayed: PropTypes.number.isRequired,
  className: PropTypes.string
}

export default PageNav
