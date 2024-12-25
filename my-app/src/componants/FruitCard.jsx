import React from "react";

function Fa(){
   return (
    <div>
        <table>
            <tr><td><img src="https://images.pexels.com/photos/1131079/pexels-photo-1131079.jpeg" alt="Apple" width="150px" height="150px"/></td></tr>
            <tr><td>Apple</td></tr>
            <tr><td>150</td></tr>
        </table>
 </div>)
   }
   
   function Fo(){
    return (
     <div>
         <table>
             <tr><td><img src="https://images.pexels.com/photos/820905/pexels-photo-820905.jpeg" alt="Orange" width="150px" height="150px"/></td></tr>
             <tr><td>Orange</td></tr>
             <tr><td>120</td></tr>
         </table>
  </div>)
    }
   
    function Fb(){
        return (
         <div>
             <table>
                 <tr><td><img src="https://images.pexels.com/photos/131054/pexels-photo-131054.jpeg" alt="Blue Berry" width="150px" height="150px"/></td></tr>
                 <tr><td>Blue Berry</td></tr>
                 <tr><td>80</td></tr>
             </table>
      </div>)
        }
       
export default function FruitsCard(){
    return(
        <div className="fruit-container">
        <Fa/>
        <Fo/>
        <Fb/>
        </div>
    )
}

