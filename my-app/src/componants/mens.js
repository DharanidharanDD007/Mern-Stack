import React from "react";
import MensCard from "./MensCart";
import { useState } from "react";

export default function Mens(){
  const [cartItems,setCartItems]=useState(false);
  const showMens=()=>{
    setCartItems(true);
  }
  return(
    <div>
      {
        !cartItems?(
           <table>
            <td>
              <img src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mens" width="150px" height="150px" onClick={showMens}/>
            </td>
            <td>Mens Fashion</td>
           </table>):

           (<MensCard/>)
      }
    </div>
  );
}