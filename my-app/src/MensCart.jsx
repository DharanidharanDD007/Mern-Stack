
import React from "react";

function Ms(){
   return (
    <div>
        <table className="cen">
            <tr><td><img src="https://bananaclub.co.in/cdn/shop/files/BrownCheckedOvershirt_4.jpg?v=1732799591&width=500" alt="Shirt" width="200px" height="200px"/></td></tr>
            <tr><td>Shirt</td></tr>
            <tr><td>Price:699</td></tr>
        </table>
 </div>)
   }
   
   function Mp(){
    return (
     <div>
         <table className="cen"> 
             <tr><td><img src="https://freakins.com/cdn/shop/products/FreakinsMenswear-04416-min.jpg?v=1676450527" alt="Baggy Pant" width="200px" height="200px"/></td></tr>
             <tr><td>Baggy Pant</td></tr>
             <tr><td>Price:899</td></tr>
         </table>
  </div>)
    }
   
    function Mt(){
        return (
         <div>
             <table className="cen">
                 <tr><td><img src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600" alt="TShirt" width="200px" height="200px"/></td></tr>
                 <tr><td>TShirt</td></tr>
                 <tr><td>Price:599</td></tr>
             </table>
      </div>)
        }
        function Msh(){
            return (
             <div>
                 <table className="cen"> 
                     <tr><td><img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-1253763-2529148.jpg&fm=jpg&_gl=1*1vmf9qu*_ga*MTQ5NzU1ODg0NC4xNzM0OTQ0OTkx*_ga_8JE65Q40S6*MTczNTExNDgyNC40LjEuMTczNTExNjMzOC4wLjAuMA.." alt="Mens Shoe" width="200px" height="200px"/></td></tr>
                     <tr><td>Mens Shoe</td></tr>
                     <tr><td>Price:899</td></tr>
                 </table>
          </div>)
            }
            function Mw(){
                return (
                 <div>
                     <table className="cen"> 
                         <tr><td><img src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Watch" width="200px" height="200px"/></td></tr>
                         <tr><td>Watch</td></tr>
                         <tr><td>Price:1399</td></tr>
                     </table>
              </div>)
                }
                function Mc(){
                    return (
                     <div>
                         <table className="cen"> 
                             <tr><td><img src="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Baggy Pant" width="200px" height="200px"/></td></tr>
                             <tr><td>Cap for men</td></tr>
                             <tr><td>Price:399</td></tr>
                         </table>
                  </div>)
                    }
       
export default function MensCart(){
    return(
        <div className="men-container">
        <Ms/>
        <Mp/>
        <Mt/>
        <Mc/>
        <Mw/>
        <Msh/>
        </div>
    )
}

