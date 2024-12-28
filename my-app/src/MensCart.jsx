import React, { useState } from "react";

function MenShirt() {
  return (
    <div className="men-shirt-container">
      <h2>Men Shirts Collection</h2>
      <div className="shirt-grid">
        <div className="shirt-item">
          <img
            src="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Shirt 1"
            width="200px"
            height="200px"
          />
          <p>Formal Shirt 1</p>
          <p>Price: ₹799</p>
        </div>
        <div className="shirt-item">
          <img
            src="https://images.pexels.com/photos/1043148/pexels-photo-1043148.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Shirt 2"
            width="200px"
            height="200px"
          />
          <p>Formal Shirt 2</p>
          <p>Price: ₹899</p>
        </div>
        <div className="shirt-item">
          <img
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Shirt 3"
            width="200px"
            height="200px"
          />
          <p>Formal Shirt 3</p>
          <p>Price: ₹799</p>
          <div className="shirt-item">
          <img
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Shirt 4"
            width="200px"
            height="200px"
          />
          <p>Formal Shirt 3</p>
          <p>Price: ₹799</p>
        </div>
        <div className="shirt-item">
          <img
            src="https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Shirt 5"
            width="200px"
            height="200px"
          />
          <p>Formal Shirt 3</p>
          <p>Price: ₹799</p>
        </div>
        <div className="shirt-item">
          <img
            src="https://images.pexels.com/photos/356252/pexels-photo-356252.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Shirt 6"
            width="200px"
            height="200px"
          />
          <p>Formal Shirt 3</p>
          <p>Price: ₹799</p>
        </div>
        <div className="shirt-item">
          <img
            src="https://images.pexels.com/photos/27411114/pexels-photo-27411114/free-photo-of-man-in-shirt-sitting-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Shirt 7"
            width="200px"
            height="200px"
          />
          <p>Formal Shirt 3</p>
          <p>Price: ₹799</p>
        </div>
        <div className="shirt-item">
          <img
            src="https://images.pexels.com/photos/5145180/pexels-photo-5145180.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Shirt 8"
            width="200px"
            height="200px"
          />
          <p>Formal Shirt 3</p>
          <p>Price: ₹799</p>
        </div>
        </div>
      </div>
    </div>
  );
}

function Ms({ onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <table className="cen">
        <tbody>
          <tr>
            <td>
              <img
                src="https://bananaclub.co.in/cdn/shop/files/BrownCheckedOvershirt_4.jpg?v=1732799591&width=500"
                alt="Shirt"
                width="200px"
                height="200px"
              />
            </td>
          </tr>
          <tr>
            <td>Shirt</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function MenPants() {
    return (
      <div className="men-shirt-container">
        <h2>Men Pants Collection</h2>
        <div className="shirt-grid">
          <div className="shirt-item">
            <img
              src="https://images.pexels.com/photos/17393929/pexels-photo-17393929/free-photo-of-man-posing-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pant 1"
              width="200px"
              height="200px"
            />
            <p>Baggy Pant 1</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-man-in-t-shirt-and-with-blonde-dreadlocks.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pant 2"
              width="200px"
              height="200px"
            />
            <p>Baggy Pants 2</p>
            <p>Price: ₹899</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://images.pexels.com/photos/28931380/pexels-photo-28931380/free-photo-of-moody-urban-fashion-portrait-against-concrete-wall.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pant 3"
              width="200px"
              height="200px"
            />
            <p>Baggy pant 3</p>
            <p>Price: ₹799</p>
            <div className="shirt-item">
            <img
              src="https://images.pexels.com/photos/11232184/pexels-photo-11232184.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pant 4"
              width="200px"
              height="200px"
            />
            <p>Baggy Pant 4</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://images.pexels.com/photos/29817667/pexels-photo-29817667/free-photo-of-urban-street-style-fashion-with-baseball-bat.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pant 5"
              width="200px"
              height="200px"
            />
            <p>Baggy Pant 5</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://images.pexels.com/photos/7936548/pexels-photo-7936548.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pant 6"
              width="200px"
              height="200px"
            />
            <p>Baggy Pant 6</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://images.pexels.com/photos/7764611/pexels-photo-7764611.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pant 7"
              width="200px"
              height="200px"
            />
            <p>Baggy Pant 7</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://images.pexels.com/photos/6311478/pexels-photo-6311478.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pant 8"
              width="200px"
              height="200px"
            />
            <p>Baggy Pant 8</p>
            <p>Price: ₹799</p>
          </div>
          </div>
        </div>
      </div>
    );
  }

function Mp({ onClick }) {
    return (
      <div onClick={onClick} style={{ cursor: "pointer" }}>
      <table className="cen">
        <tbody>
          <tr>
            <td>
              <img
                src="https://freakins.com/cdn/shop/products/FreakinsMenswear-04416-min.jpg?v=1676450527"
                alt="Baggy Pant"
                width="200px"
                height="200px"
              />
            </td>
          </tr>
          <tr>
            <td>Baggy Pant</td>
          </tr>
          <tr>
            <td>Price: ₹899</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function MenTshirt() {
    return (
      <div className="men-shirt-container">
        <h2>Men Tshirt Collection</h2>
        <div className="shirt-grid">
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/5a/4b/ab/5a4bab5f3e59eabf85a71ffe2f8b7f86.jpg"
              alt="Tshirt 1"
              width="200px"
              height="200px"
            />
            <p>Tshirt 1</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/ef/90/6e/ef906eb62793f5cce5da38e514ac9282.jpg"
              alt="Tshirt 2"
              width="200px"
              height="200px"
            />
            <p>Tshirt 2</p>
            <p>Price: ₹899</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/474x/19/19/15/191915c8aab1dcf71bb41312c1ba9c53.jpg"
              alt="Tshirt 3"
              width="200px"
              height="200px"
            />
            <p>Tshirt 3</p>
            <p>Price: ₹799</p>
            <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/6b/fd/5e/6bfd5edede970899f434053116c8fd16.jpg"
              alt="Tshrt 4"
              width="200px"
              height="200px"
            />
            <p>Tshirt 4</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/54/dc/40/54dc40a11a428c0e22968d42f5e8d2c0.jpg"
              alt="Tshirt 5"
              width="200px"
              height="200px"
            />
            <p>Tshirt 5</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/6d/cb/3c/6dcb3cdc15680391c66a98d15e404167.jpg"
              alt="Tshirt 6"
              width="200px"
              height="200px"
            />
            <p>Tshirt 6</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/3b/e7/4f/3be74f7446e296c5db3b37a0b14145a9.jpg"
              alt="Tshirt 7"
              width="200px"
              height="200px"
            />
            <p>Tshirt 7</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/72/85/c9/7285c943894e7ea1973fd5dfb0afb206.jpg"
              alt="Tshirt 8"
              width="200px"
              height="200px"
            />
            <p>Tshirt 8</p>
            <p>Price: ₹799</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
function Mt({ onClick }) {
    return (
      <div onClick={onClick} style={{ cursor: "pointer" }}>
        <table className="cen">
          <tbody>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Tshirt"
                  width="200px"
                  height="200px"
                />
              </td>
            </tr>
            <tr>
              <td>Tshirt</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  
function MenShoes() {
    return (
      <div className="men-shirt-container">
        <h2>Men Shoes Collection</h2>
        <div className="shirt-grid">
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/13/e0/3c/13e03c38419f8e45f23a2d0b4c1f188a.jpg"
              alt="Shoe 1"
              width="200px"
              height="200px"
            />
            <p>Shoe 1</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/69/5f/9e/695f9eba25719278c0f4cf4f9f9c8d6d.jpg"
              alt="Shoe 2"
              width="200px"
              height="200px"
            />
            <p>Shoe 2</p>
            <p>Price: ₹899</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/49/18/a8/4918a8acab009e6ebb4505b872065145.jpg"
              alt="Shoe 3"
              width="200px"
              height="200px"
            />
            <p>Shoe 3</p>
            <p>Price: ₹799</p>
            <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/10/c5/d7/10c5d7d911359ff049282a66fc9a7982.jpg"
              alt="Shoe 4"
              width="200px"
              height="200px"
            />
            <p>Shoe 4</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/ef/62/2c/ef622cc489f83b6eefba054434b426be.jpg"
              alt="Shoe 5"
              width="200px"
              height="200px"
            />
            <p>Shoe 5</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/21/47/f4/2147f44d959bb4f8a19c9b7564cb7432.jpg"
              alt="Shoe 6"
              width="200px"
              height="200px"
            />
            <p>Shoe 6</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/22/0d/d8/220dd878b7ae9883494a8d11b69e4ca0.jpg"
              alt="Shoe 7"
              width="200px"
              height="200px"
            />
            <p>Shoe 7</p>
            <p>Price: ₹799</p>
          </div>
          <div className="shirt-item">
            <img
              src="https://i.pinimg.com/236x/da/7f/a4/da7fa41c66c022bcb9c1909429a0cd3d.jpg"
              alt="Shoe 8"
              width="200px"
              height="200px"
            />
            <p>Shoe 8</p>
            <p>Price: ₹799</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
  function Msh({ onClick }) {
    return (
      <div onClick={onClick} style={{ cursor: "pointer" }}>
        <table className="cen">
          <tbody>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-1253763-2529148.jpg&fm=jpg&_gl=1*1vmf9qu*_ga*MTQ5NzU1ODg0NC4xNzM0OTQ0OTkx*_ga_8JE65Q40S6*MTczNTExNDgyNC40LjEuMTczNTExNjMzOC4wLjAuMA.."
                  alt="Shoes"
                  width="200px"
                  height="200px"
                />
              </td>
            </tr>
            <tr>
              <td>Shoes</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  function Mw(){
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Watch"
                  width="200px"
                  height="200px"
                />
              </td>
            </tr>
            <tr>
              <td>Watchs</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

    function Mc(){
        return (
          <div>
        <table className="cen">
          <tbody>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Cap"
                  width="200px"
                  height="200px"
                />
              </td>
            </tr>
            <tr>
              <td>Caps</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  

export default function MensCart() {
  const [view, setView] = useState("main");

  return (
    <div className="men-container">
      {view === "main" && (
        <>
          <Ms onClick={() => setView("menShirt")} />
          <Mp onClick={() => setView("menPants")} />
         <Mt onClick={() => setView("menTshirt")} />
         <Msh onClick={() => setView("menShoes")}  />
         <Mw  />
         <Mc />

        </>
      )}
      {view === "menShirt" && <MenShirt />}
      {view === "menPants" && <MenPants/>}
      {view === "menTshirt" && <MenTshirt/>}
      {view === "menShoes" && <MenShoes/>}

    </div>
  );

    }
