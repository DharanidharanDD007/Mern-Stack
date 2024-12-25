import React from "react";
import FruitsCart from "./FruitsCart.jsx";
import { useState } from "react";

export default function Fruits(){
  const [cartItems,setCartItems]=useState(false);
  const showFruits=()=>{
    setCartItems(true);
  }
  return(
    <div>
      {
        !cartItems?(
           <table>
            <tr>
            <td>
              <img src="https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mens" width="250px" height="250px" onClick={showFruits}/>
            </td></tr>
            <tr><td>Fruits</td></tr>
           </table>):

           (<FruitsCart/>)
      }
    </div>
  );
}