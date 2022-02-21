// Import React Components
import React from 'react'

// Import SCSS
import './shop.styles.scss'

// Import Components
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

// Import Files
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {

    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-name'>
                {
                    collections.map(({ id, ...otherCollections }) => (
                        <CollectionPreview key={id} {...otherCollections}></CollectionPreview>
                    ))
                }
            </div>
        )
    }

}

export default ShopPage;