import React from "react";
import AccessoriesCard from "./AccessoriesCard";

import { useState } from "react";

export default function Accessories(){
  const [cartItems,setCartItems]=useState(false);
  const showAccessories=()=>{
    setCartItems(true);
  }
  return(
    <div className="mainback">
      {
        !cartItems?(
           <table>
            <tr>
            <td>
              <img src="https://images.pexels.com/photos/3568521/pexels-photo-3568521.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mobile Accessories" width="250px" height="250px" onClick={showAccessories}/>
            </td></tr>
            <tr><td>Mobile Accessories</td></tr>
           </table>):

           (<AccessoriesCard/>)
      }
    </div>
  );
}