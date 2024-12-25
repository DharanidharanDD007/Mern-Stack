import React from "react";

function Fa(){
   return (
    <div>
        <table className="cen">
            <tr><td><img src="https://images.pexels.com/photos/1131079/pexels-photo-1131079.jpeg" alt="Apple" width="200px" height="200px"/></td></tr>
            <tr><td>Apple</td></tr>
            <tr><td>Price:150</td></tr>
        </table>
 </div>)
   }
   
   function Fo(){
    return (
     <div>
         <table className="cen">
             <tr><td><img src="https://images.pexels.com/photos/820905/pexels-photo-820905.jpeg" alt="Orange" width="200px" height="200px"/></td></tr>
             <tr><td>Orange</td></tr>
             <tr><td>Price:120</td></tr>
         </table>
  </div>)
    }
   
    function Fb(){
        return (
         <div>
             <table className="cen">
                 <tr><td><img src="https://images.pexels.com/photos/131054/pexels-photo-131054.jpeg" alt="Blue Berry" width="200px" height="200px"/></td></tr>
                 <tr><td>Blue Berry</td></tr>
                 <tr><td>Price:80</td></tr>
             </table>
      </div>)
        }

        function Fg(){
            return (
             <div>
                 <table className="cen">
                     <tr><td><img src="https://images.pexels.com/photos/3252136/pexels-photo-3252136.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Grape" width="200px" height="200px"/></td></tr>
                     <tr><td>Grape</td></tr>
                     <tr><td>Price:90</td></tr>
                 </table>
          </div>)
            }


            function Fp(){
                return (
                 <div>
                     <table className="cen">
                         <tr><td><img src="https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pineapple" width="200px" height="200px"/></td></tr>
                         <tr><td>Pineapple</td></tr>
                         <tr><td>Price:150</td></tr>
                     </table>
              </div>)
                }


                function Fs(){
                    return (
                     <div>
                         <table className="cen">
                             <tr><td><img src="https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Strawberry" width="200px" height="200px"/></td></tr>
                             <tr><td>Strawberry</td></tr>
                             <tr><td>Price:250</td></tr>
                         </table>
                  </div>)
                    }
       
export default function FruitsCart(){
    return(
        <div className="fruit-container">
        <Fa/>
        <Fo/>
        <Fb/>
        <Fs/>
        <Fp/>
        <Fg/>
        </div>
    )
}

