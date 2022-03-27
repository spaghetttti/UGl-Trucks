import React from 'react';

import './item.styles.scss';

const Item = ({name, img, description, price, contactNumber}) => {
    return (
        <div className="item">
            {name}
            {description.power}
        </div>
    )
}

export default Item;