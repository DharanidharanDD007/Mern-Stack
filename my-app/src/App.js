import React from 'react'
import Accessories from './Accessories';
import Fruits from './Fruits';
import Mens from './Mens';


export default function App() {
 
  return (
   <div className='back'>
      <h1>Welcome to E-shopping</h1>
    <div >
      <table >
        <tr className='hor'>
       <div>  <Fruits/></div></tr>
       <tr><div> <Accessories/></div></tr>
       <tr><div>  <Mens/></div></tr>
      </table>
    </div>
 </div>
  );
}
