
import React from "react";

function Ms(){
   return (
    <div>
        <table>
            <tr><td><img src="https://bananaclub.co.in/cdn/shop/files/BrownCheckedOvershirt_4.jpg?v=1732799591&width=500" alt="Shirt" width="150px" height="150px"/></td></tr>
            <tr><td>Shirt</td></tr>
            <tr><td>699</td></tr>
        </table>
 </div>)
   }
   
   function Mp(){
    return (
     <div>
         <table>
             <tr><td><img src="https://freakins.com/cdn/shop/products/FreakinsMenswear-04416-min.jpg?v=1676450527" alt="Baggy Pant" width="150px" height="150px"/></td></tr>
             <tr><td>Baggy Pant</td></tr>
             <tr><td>899</td></tr>
         </table>
  </div>)
    }
   
    function Mt(){
        return (
         <div>
             <table>
                 <tr><td><img src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600" alt="TShirt" width="150px" height="150px"/></td></tr>
                 <tr><td>TShirt</td></tr>
                 <tr><td>599</td></tr>
             </table>
      </div>)
        }
       
export default function MensCard(){
    return(
        <div className="men-container">
        <Ms/>
        <Mp/>
        <Mt/>
        </div>
    )
}

