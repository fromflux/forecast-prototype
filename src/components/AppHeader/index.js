import React from 'react'
import styles from './styles.css'

import { Link } from 'react-router'

import { SearchIcon } from '../Icons'

const AppHeader = ({ title }) => {
  return (
    <header className={styles.AppHeader}>
      <Link to="/location" className={styles.HeaderIcon} activeClassName={styles.active}>
        <SearchIcon />
      </Link>
      {title}
    </header>
  )
}

AppHeader.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default AppHeader