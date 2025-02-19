import React, { useState } from "react";
import { fruitsData } from "./Data";

function FruitCard({ id, src, name, price, addToCart }) {
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

function FruitCollection({ title, fruits = [], addToCart }) {
  return (
    <div className="men-collection">
      <h2>{title} Collections</h2>
      <div className="men-shirt-container">
        {fruits.length > 0 ? (
          fruits.map((item, index) => (
            <FruitCard
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

function FruitButton({ imgSrc, label, onClick }) {
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

export default function FruitsCart({ addToCart }) {
  const [view, setView] = useState("main");

  const categories = {
    Apple: { data: fruitsData.apple || [], imgSrc: "https://images.pexels.com/photos/1131079/pexels-photo-1131079.jpeg" },
    Orange: { data: fruitsData.orange || [], imgSrc: "https://images.pexels.com/photos/820905/pexels-photo-820905.jpeg" },
    Blueberry: { data: fruitsData.blueberry || [], imgSrc: "https://images.pexels.com/photos/131054/pexels-photo-131054.jpeg" },
    Grape: { data: fruitsData.grape || [], imgSrc: "https://images.pexels.com/photos/3252136/pexels-photo-3252136.jpeg?auto=compress&cs=tinysrgb&w=600" },
    Pineapple: { data: fruitsData.pineapple || [], imgSrc: "https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=600" },
    Strawberry: { data: fruitsData.strawberry || [], imgSrc: "https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=600" },
  };

  return (
    <div className="men-container">
      {view === "main" ? (
        <>
          {Object.keys(categories).map((category) => (
            <FruitButton
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
          <FruitCollection title={view} fruits={categories[view].data} addToCart={addToCart} />
        </>
      )}
    </div>
  );
}
