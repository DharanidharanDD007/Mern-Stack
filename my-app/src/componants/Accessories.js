import React from "react";
import AccessoriesCard from "./AccessoriesCard";

import { useState } from "react";

export default function Accessories(){
  const [cartItems,setCartItems]=useState(false);
  const showAccessories=()=>{
    setCartItems(true);
  }
  return(
    <div>
      {
        !cartItems?(
           <table>
            <td>
              <img src="https://images.pexels.com/photos/3568521/pexels-photo-3568521.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mobile Accessories" width="150px" height="150px" onClick={showAccessories}/>
            </td>
            <td>Mobile Accessories</td>
           </table>):

           (<AccessoriesCard/>)
      }
    </div>
  );
}