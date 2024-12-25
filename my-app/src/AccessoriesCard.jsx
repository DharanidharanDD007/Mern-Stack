
import React from "react";

function Ah(){
   return (
    <div>
        <table className="cen">
            <tr><td><img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Headphone" width="200px" height="200px"/></td></tr>
            <tr><td>Headphone</td></tr>
            <tr><td>Price:699</td></tr>
        </table>
 </div>)
   }
   
   function Ae(){
    return (
     <div>
         <table className="cen">
             <tr><td><img src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Earbud" width="200px" height="200px"/></td></tr>
             <tr><td>Earbud</td></tr>
             <tr><td>Price:1099</td></tr>
         </table>
  </div>)
    }

   
    function Ap(){
        return (
         <div>
             <table className="cen">
                 <tr><td><img src="https://images.pexels.com/photos/10104320/pexels-photo-10104320.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Powerbank" width="200px" height="200px"/></td></tr>
                 <tr><td>Powerbank</td></tr>
                 <tr><td>Price:599</td></tr>
             </table>
      </div>)
        }
       function Ac(){
    return (
     <div>
         <table className="cen">
             <tr><td><img src="https://images.pexels.com/photos/15822007/pexels-photo-15822007/free-photo-of-photo-of-a-charging-phone.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Charger" width="200px" height="200px"/></td></tr>
             <tr><td>Charger</td></tr>
             <tr><td>Price:499</td></tr>
         </table>
  </div>)
    }
    function Am(){
        return (
         <div>
             <table className="cen">
                 <tr><td><img src="https://images.pexels.com/photos/1029286/pexels-photo-1029286.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mouse" width="200px" height="200px"/></td></tr>
                 <tr><td>Mouse</td></tr>
                 <tr><td>Price:599</td></tr>
             </table>
      </div>)
        }
        function Ak(){
            return (
             <div>
                 <table className="cen">
                     <tr><td><img src="https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Keyboard" width="200px" height="200px"/></td></tr>
                     <tr><td>Keyboard</td></tr>
                     <tr><td>Price:1099</td></tr>
                 </table>
          </div>)
            }
export default function AccessoriesCard(){
    return(
        <div className="access-container">
        <Ah/>
        <Ae/>
        <Ap/>
        <Ac/>
        <Am/>
        <Ak/>
        </div>
    )
}

