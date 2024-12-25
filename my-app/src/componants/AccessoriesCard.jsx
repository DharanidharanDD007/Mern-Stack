
import React from "react";

function Ah(){
   return (
    <div>
        <table>
            <tr><td><img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Headphone" width="150px" height="150px"/></td></tr>
            <tr><td>Headphone</td></tr>
            <tr><td>699</td></tr>
        </table>
 </div>)
   }
   
   function Ae(){
    return (
     <div>
         <table>
             <tr><td><img src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Earbud" width="150px" height="150px"/></td></tr>
             <tr><td>Earbud</td></tr>
             <tr><td>1099</td></tr>
         </table>
  </div>)
    }
   
    function Ap(){
        return (
         <div>
             <table>
                 <tr><td><img src="https://images.pexels.com/photos/10104320/pexels-photo-10104320.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Powerbank" width="150px" height="150px"/></td></tr>
                 <tr><td>Powerbank</td></tr>
                 <tr><td>599</td></tr>
             </table>
      </div>)
        }
       
export default function AccessoriesCard(){
    return(
        <div className="access-container">
        <Ah/>
        <Ae/>
        <Ap/>
        </div>
    )
}

