import React from "react";
import FruitsCard from "./FruitsCard.jsx";
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
            <td>
              <img src="https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mens" width="150px" height="150px" onClick={showFruits}/>
            </td>
            <td>Fruits</td>
           </table>):

           (<FruitsCard/>)
      }
    </div>
  );
}