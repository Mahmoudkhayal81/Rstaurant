import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';  // 👈 مهم

function FoodItem({ id, name, price, description, image }) {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-image-container'>
                <img className='food-item-image' src={image} alt={name} />
                {!cartItems[id] ? (
                    <img
                        className='add'
                        src={assets.add_icon_white}
                        alt="add"
                        onClick={() => addToCart(id)}
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img
                            src={assets.remove_icon_red}
                            alt="remove"
                            onClick={() => removeFromCart(id)}
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            src={assets.add_icon_green}
                            alt="add"
                            onClick={() => addToCart(id)}
                        />
                    </div>
                )}
            </div>
            <div className='food-item-info'>
                <div className='food-item-info-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
}

export default FoodItem;
