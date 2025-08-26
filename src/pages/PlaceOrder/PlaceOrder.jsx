import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

function PlaceOrder() {
  const { cartItems, getTotalCartAmount, food_list } = useContext(StoreContext);

  const subtotal = food_list.reduce((sum, item) => {
    const qty = cartItems[item._id] || 0;
    return sum + item.price * qty;
  }, 0);

  const deliveryFee = subtotal > 0 ? 5 : 0; // مثال: 5 دولار رسوم توصيل
  const total = subtotal + deliveryFee;

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className='multi-fields'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone number' />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <hr />
          <div className='cart-total-details total'>
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
        <button type="submit">PROCEED TO PAYMENT</button>
      </div>
    </form>
  );
}

export default PlaceOrder;
