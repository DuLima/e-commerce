// Import React Component
import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Import SCSS
import './directory.styles.scss'

// Import Components
import MenuItem from '../menu-item/menu-item.component'

import { selectDirectorySections } from '../../redux/directory/directory.selector'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {
      sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps}></MenuItem>
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);