import React, { useState } from "react";
import { WomensData } from "./Data";

function WomenCard({ id, src, name, price, addToCart }) {
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

// Women Collection Component
function WomenCollection({ title, womens = [], addToCart }) {
  return (
    <div className="women-collection">
      <h2>{title} Collections</h2>
      <div className="men-shirt-container">
        {womens.length > 0 ? (
          womens.map((item, index) => (
            <WomenCard
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

// Main Category Button for Women
function WomenButton({ imgSrc, label, onClick }) {
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

export default function WomensCart({ addToCart }) {
  const [view, setView] = useState("main");

  const categories = {
    Saree:  WomensData.saree || [],
    Kurtas:  WomensData.kurtas || [],
    Lehenga:  WomensData.lehenga || [],
    Modern:  WomensData.modern || [],
    Jean:  WomensData.jean || [],
    Party:  WomensData.party || [],
  };

  const categoryImages = {
    Saree: "https://i.pinimg.com/236x/17/5d/a9/175da9a9bd9e3819ac2e8f6bce6a9bc6.jpg",
    Kurtas: "https://i.pinimg.com/236x/eb/a1/e1/eba1e1c19eff486eeb48dc0be6fa1796.jpg",
    Lehenga: "https://i.pinimg.com/236x/53/9c/4d/539c4d680ebfeeb0f7ef6ce9f6474833.jpg",
    Modern: "https://i.pinimg.com/236x/48/5c/1e/485c1ed0b075573725940d68783227ce.jpg",
    Jean: "https://i.pinimg.com/236x/39/c7/aa/39c7aa399fad53646c4729541c0606f3.jpg",
    Party: "https://i.pinimg.com/236x/0a/e6/df/0ae6df544daeb5bd6593edc1891e540d.jpg",
  };

  return (
    <div className="men-container">
      {view === "main" ? (
        <>
          {Object.keys(categories).map((category) => (
            <WomenButton
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
          <WomenCollection title={view} womens={categories[view]} addToCart={addToCart} />
        </>
      )}
    </div>
  );
}
