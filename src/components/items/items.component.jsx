import React from 'react';
import Item from '../item/item.component';
import QuickSearch from "../../components/quick-search/quick-search.component";

import mockTrucks from '../../assets/mock-data';
import './items.styles.scss';

const Items = () => {
    return(
        <div className="items">
            <div className="for-mob"> <QuickSearch/></div>
           {mockTrucks.map(({id, ...otherMockProps}) => <Item key={id} { ...otherMockProps}/>)}
        </div>
    )
}

export default Items;