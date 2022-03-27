import React from 'react';
import Item from '../item/item.component';

import mockTrucks from '../../assets/mock-data';
import './items.styles.scss';

const Items = () => {
    return(
        <div className="item">
           {mockTrucks.map(({id, ...otherMockProps}) => <Item key={id} { ...otherMockProps}/>)}
        </div>
    )
}

export default Items;