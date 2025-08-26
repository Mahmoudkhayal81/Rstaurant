import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  // حساب المجموع الكلي
  const subtotal = food_list.reduce((acc, item) => {
    const qty = cartItems[item._id] || 0;
    return acc + item.price * qty;
  }, 0);

  const deliveryFee = subtotal > 0 ? 5 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {(!food_list || Object.keys(cartItems).length === 0) && (
          <p className='empty-cart'>Your cart is empty</p>
        )}
        {food_list && food_list.map((item, index) => {
          const qty = cartItems[item._id] || 0;
          if (qty > 0) {
            return (
              <div key={index}>
                <div className='cart-items-item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{qty}</p>
                  <p>${item.price * qty}</p>
                  <button onClick={() => removeFromCart(item._id)}>Remove</button>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className='cart-button'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>
          <hr />
          <div className='cart-total-details total'>
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>
        <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>

      <div className='cart-promocode'>
        <div>
          <p>If you have a promo code, enter it here:</p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
