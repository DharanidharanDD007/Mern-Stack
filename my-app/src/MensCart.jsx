import React, { useState } from "react";
import { MensData } from "./Data";

// Reusable MenCard Component
function MenCard({ id, src, name, price, addToCart }) {
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

// Men Collection Component
function MenCollection({ title, mens = [], addToCart }) {
  return (
    <div className="men-collection">
      <h2>{title} Collection</h2>
      <div className="men-shirt-container">
        {mens.length > 0 ? (
          mens.map((item, index) => (
            <MenCard
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

// Main Category Button Component
function MensButton({ imgSrc, label, onClick }) {
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

// Main MensCart Component
export default function MensCart({ addToCart }) {
  const [view, setView] = useState("main");

  const categories = {
    Shirt: MensData.Shirt || [],
    Pants: MensData.Pants || [],
    Tshirt: MensData.Tshirt || [],
    Shoes: MensData.Shoes || [],
    Watch: MensData.Watch || [],
    Cap: MensData.Cap || [],
  };

  const categoryImages = {
    Shirt: "https://bananaclub.co.in/cdn/shop/files/BrownCheckedOvershirt_4.jpg?v=1732799591&width=500",
    Pants: "https://freakins.com/cdn/shop/products/FreakinsMenswear-04416-min.jpg?v=1676450527",
    Tshirt: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600",
    Shoes: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-1253763-2529148.jpg&fm=jpg",
    Watch: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Cap: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  return (
    <div className="men-container">
      {view === "main" ? (
        <>
          {Object.keys(categories).map((category) => (
            <MensButton
              key={category}
              imgSrc={categoryImages[category]}
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
          <MenCollection title={view} mens={categories[view]} addToCart={addToCart} />
        </>
      )}
    </div>
  );
}
