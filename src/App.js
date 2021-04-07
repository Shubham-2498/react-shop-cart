import React,{useState} from "react";
import './App.css';
import product from "./data.json";
import Products from "./components/Products"

function App() {
  const [products,setProducts]=useState(product.products)
  const [size,setSize]=useState(null)
  const [availableSizes,setAvailableSizes]=useState(null)
  const [sort,setSort]=useState(null)
console.log("my products===>",products)
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
          <div className="content">
            <div className="main">
              <Products products={products}/>
            </div>
            <div className="sidebar">
              Cart Items
            </div> 
          </div>
      </main>
      <footer>
        All rights are reserved.
      </footer>
    </div>
  );
}

export default App;
