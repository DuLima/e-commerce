// Import React Components
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Import SCSS
import './shop.styles.scss'

// Import Components
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selector';

const ShopPage = ({ collections }) => (
    <div className='shop-name'>
        {
            collections.map(({ id, ...otherCollections }) => (
                <CollectionPreview key={id} {...otherCollections}></CollectionPreview>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);