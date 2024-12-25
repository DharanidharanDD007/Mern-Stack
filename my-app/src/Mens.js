import React from "react";
import MensCart from "./MensCart";
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
            <tr>
            <td>
              <img src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mens" width="250px" height="250px" onClick={showMens}/>
            </td></tr>
        <tr>    <td>Mens Fashion</td></tr>
           </table>):

           (<MensCart/>)
      }
    </div>
  );
}