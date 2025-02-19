import React from "react";
import { useNavigate } from "react-router-dom";

export default function CartProducts({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  setPurchasedItems,
  clearCart,
}) {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (Number(String(item.price).replace("₹", "")) || 0) * item.quantity,
    0
  );

  const handleBuyClick = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (window.confirm("Are you sure you want to buy these products?")) {
      alert("Purchase successful!");
      setPurchasedItems(cartItems); // Store purchased items
      clearCart(); // Clear the cart after purchase
      navigate("/myorder"); // Navigate to MyOrder page
    }
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.src} alt={item.name} width="50px" height="50px" />
                <span className="item-details">
                  {item.name} - ₹{item.price} x {item.quantity}
                </span>
                <div className="quantity-controls">
                  <button onClick={() => increaseQuantity(item)}>+</button>
                  <button
                    onClick={() => decreaseQuantity(item)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <h3>Total Amount: ₹{totalPrice.toFixed(2)}</h3>
            <button className="buy-button" onClick={handleBuyClick}>
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}
