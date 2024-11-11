import React from 'react';
import './cart.css';

const Cart = () => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <p>Currently, there are no items in your cart.</p>
      <div className="cart-actions">
        <button className="checkout-btn">Proceed to Checkout</button>
        <button className="continue-shopping-btn">Continue Shopping</button>
      </div>
    </div>
  );
};

export default Cart;