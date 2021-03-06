// Import React Components
import React from 'react'

// Import SCSS
import './collection-preview.styles.scss'

// Import Components
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, index) => index < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item}></CollectionItem>
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview;