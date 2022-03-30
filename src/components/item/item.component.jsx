import React from 'react';
import './item.styles.scss';

const Item = ({name, img, description, price, contactNumber, imgId}) => {
    console.log({name, img, description, price, contactNumber, imgId});
    return (
        <div className="item">
            <div className="img">
                <img src={img} alt="" />          
            </div>
            <div className="desc">
            <h3>{name}</h3>
            <p className="desc__info">
                 <ul >
                     <li><b>Engine:</b> {description.engine}</li>
                     <li><b>House Power:</b> {description.power}</li>
                     <li><b>Color:</b> {description.color}</li>
                     <li><b>Condition:</b> {description.condition}</li>
                     <li><b>Milage:</b> {description.milage}</li>
                     <li><b>Price:</b> <span>${price}</span></li>
                     <li><b>Contact Number:</b> {contactNumber}</li>
                </ul>
            </p>
            <p className="desc__contact">
             <a href="/">Email a Seller</a>
             <a href="/">Call a Seller</a>
            </p>

            </div>
            
        </div>
    )
}

export default Item;