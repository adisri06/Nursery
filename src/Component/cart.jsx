import React from 'react';
import './cart.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate = useNavigate();
  const continueShopping = () => {
    navigate('/plantation');
  }
  const checkout = () => {
    alert('Checkout functionality will be coming soon...\nThanks for shopping');
  }
  const floweringState = useSelector((state) => state.flowering);
  const medicinalState = useSelector((state) => state.medicinal);
  const vegetableState = useSelector((state) => state.vegetable);
  const selectedItems = {
    flowers :floweringState.filter((item) => item.quantity > 0),
    medicinal :medicinalState.filter((item) => item.quantity > 0),
    vegetable :vegetableState.filter((item) => item.quantity > 0),
  }
  const totalCost = Object.values(selectedItems).flat().reduce(
    (total, item) => total + item.cost * item.quantity,
    0
  );
  const hasItems = Object.values(selectedItems).flat().length > 0;

  return (
   
    <div className="cart-container">
    <h2>Shopping Cart</h2>
    {!hasItems ? (
      <p>Currently, there are no items in your cart.</p>  // Show this message if no items are selected
    ) : ( <>
    <div className="shopping-cart">
    
    <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Item</th>
            <th>Cost</th>
            <th>Quantity Ordered</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(selectedItems).map(([category, items]) =>
            items.length > 0 ? (
              <React.Fragment key={category}>
                {/* Render category name once */}
                <tr>
                  <td rowSpan={items.length} style={{ fontWeight: 'bold' }}>
                    {category}
                  </td>
                  <td>{items[0].name}</td>
                  <td>${items[0].cost}</td>
                  <td>{items[0].quantity}</td>
                </tr>
                {items.slice(1).map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>${item.cost}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </React.Fragment>
            ) : null
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" style={{ fontWeight: 'bold' }}>Total Cost</td>
            <td colSpan="2">${totalCost}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div className="cart-actions">
      <button className="checkout-btn" onClick={checkout} >Proceed to Checkout</button>
       <button className="continue-shopping-btn" onClick={continueShopping}>
      Continue Shopping
    </button>
    </div>
    </>
)}
  </div>
        
  );
};

export default Cart;