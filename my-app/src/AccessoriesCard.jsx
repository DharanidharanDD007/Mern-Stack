import React, { useState } from "react";
import { AccessoriesData } from "./Data";

// Reusable Accessories Card Component
function AccessoriesCard({ id, src, name, price, addToCart }) {
  return (
    <div className="transform">
      <img src={src} alt={name} width="200px" height="200px" />
      <p>{name}</p>
      <p>Price: {price}</p>
      <button
        className="add-to-cart"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addToCart({ id, src, name, price });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

// Accessories Collection Component
function AccessoriesCollection({ title, accessories = [], addToCart }) {
  return (
    <div className="men-collection">
      <h2>{title} Collection</h2>
      <div className="men-shirt-container">
        {accessories.length > 0 ? (
          accessories.map((item, index) => (
            <AccessoriesCard
              key={item.id || index}
              id={item.id || index}
              src={item.src}
              name={item.name}
              price={item.price}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
}

// Category Button Component
function AccessoriesButton({ imgSrc, label, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }} className="entrance">
      <table className="cen">
        <tbody>
          <tr>
            <td>
              <img src={imgSrc} alt={label} width="200px" height="200px" />
            </td>
          </tr>
          <tr>
            <td>{label}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Main AccessoriesCart Component
export default function AccessoriesCart({ addToCart }) {
  const [view, setView] = useState("main");

  // Category Data with Images
  const categories = {
    Headphone: { data: AccessoriesData.headphone || [], imgSrc: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg" },
    Earbuds: { data: AccessoriesData.earbuds || [], imgSrc: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg" },
    Powerbanks: { data: AccessoriesData.powerbanks || [], imgSrc: "https://images.pexels.com/photos/10104320/pexels-photo-10104320.jpeg?auto=compress&cs=tinysrgb&w=600" },
    Charger: { data: AccessoriesData.charger || [], imgSrc: "https://images.pexels.com/photos/15822007/pexels-photo-15822007/free-photo-of-photo-of-a-charging-phone.jpeg?auto=compress&cs=tinysrgb&w=600" },
    Mouse: { data: AccessoriesData.mouse || [], imgSrc: "https://images.pexels.com/photos/1029286/pexels-photo-1029286.jpeg?auto=compress&cs=tinysrgb&w=600" },
    Keyboard: { data: AccessoriesData.keyboard || [], imgSrc: "https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  };

  return (
    <div className="men-container">
      {view === "main" ? (
        <>
          {Object.keys(categories).map((category) => (
            <AccessoriesButton
              key={category}
              imgSrc={categories[category].imgSrc}
              label={category}
              onClick={() => setView(category)}
            />
          ))}
        </>
      ) : (
        <>
          {/* Back Button */}
          <button onClick={() => setView("main")} className="back-button">
            Back to Categories
          </button>

          {/* Render Selected Category */}
          <AccessoriesCollection title={view} accessories={categories[view].data} addToCart={addToCart} />
        </>
      )}
    </div>
  );
}
