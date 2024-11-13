import React from 'react';
import { useMemo } from 'react';
import './cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteItem as deleteVegetable } from './Redux/vegetable';
import { deleteItem as deleteFlowering } from './Redux/flowering';
import { deleteItem as deleteMedicinal } from './Redux/medicinal';
const Cart = () => {
  const dispatch = useDispatch();
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
  const totalCost = useMemo(() => {
    return Object.values(selectedItems).flat().reduce(
      (total, item) => total + item.cost * item.quantity,
      0
    );
  }, [selectedItems]);
  const hasItems = Object.values(selectedItems).flat().length > 0;
  const handleDelete = (category, index) => {
    switch (category) {
      case 'flowering':
        dispatch(deleteFlowering(index)); // Simply setting quantity to 0
        break;
      case 'medicinal':
        dispatch(deleteMedicinal(index));
        break;
      case 'vegetable':
        dispatch(deleteVegetable(index));
        break;
      default:
        break;
    }
  };

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
            <th>Actions</th>
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
                  <td>
    <button
      onClick={() => handleDelete(category, 0)} // Use index 0 for the first item
      className="delete-btn">
      Delete
    </button>
  </td>
                </tr>
                {items.slice(1).map((item, index) => (
  <tr key={index + 1}>
    <td>{item.name}</td>
    <td>${item.cost}</td>
    <td>{item.quantity}</td>
    <td>
      <button
        onClick={() => handleDelete(category, index + 1)} // Adjusted index for the sliced items
        className="delete-btn">
        Delete
      </button>
    </td>
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