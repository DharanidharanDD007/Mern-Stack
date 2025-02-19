import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PurchaseHistory() {
  const location = useLocation();
  const purchasedItems = location.state?.cartItems || [];

  // Function to extract the numeric value from the price string
  const getPrice = (price) => {
    // Safely extract the numeric value and return it
    if (!price) return 0;
    const numericPrice = price.replace("₹", "").trim();
    return isNaN(Number(numericPrice)) ? 0 : Number(numericPrice);
  };

  return (
    <div className="purchase-history-page">
      <h2>Purchase History</h2>
      {purchasedItems.length === 0 ? (
        <p>No purchase history available.</p>
      ) : (
        <ul className="purchase-list">
          {purchasedItems.map((item) => (
            <li key={item.id} className="purchase-item">
              <span className="item-details">
                {item.name} - ₹{getPrice(item.price).toFixed(2)} x {item.quantity}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
