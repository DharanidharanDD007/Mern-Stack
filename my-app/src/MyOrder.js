import React, { useEffect, useState } from "react";

export default function MyOrder({ purchasedItems: initialPurchasedItems = [] }) {
  const [purchasedItems, setPurchasedItems] = useState(initialPurchasedItems);

  // Ensure purchasedItems updates if the prop changes
  useEffect(() => {
    setPurchasedItems(initialPurchasedItems);
  }, [initialPurchasedItems]);

  const handleCancelOrder = (itemId) => {
    const isConfirmed = window.confirm("Are you sure you want to cancel this order?");
    if (isConfirmed) {
      setPurchasedItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }
  };

  return (
    <div className="my-order-page">
      <h2>My Orders</h2>
      {purchasedItems.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul className="order-list">
          {purchasedItems.map((item) => (
            <li key={item.id} className="order-item">
              <span className="item-details">
                {item.name} - ₹{(Number(item.price) || 0).toFixed(2)} x {item.quantity}
              </span>
              <button className="cancel-button" onClick={() => handleCancelOrder(item.id)}>
                Cancel Order
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
