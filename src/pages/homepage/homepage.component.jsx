// Import React Components
import React from 'react'

// Import SASS
import './homepage.styles.scss'

// Import Components
import Directory from '../../components/directory/directory.component'

const HomePage = () => (
    <div className='homepage'>
        <Directory></Directory>
    </div>
)

export default HomePage;