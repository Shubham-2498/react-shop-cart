import React, { useState } from "react";
import "./App.css";
import product from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

function App() {
  const [products, setProducts] = useState(product.products);
  const [size, setSize] = useState(null);
  const [availableSizes, setAvailableSizes] = useState(null);
  const [sort, setSort] = useState(null);
  console.log("my products===>", products);

  const filterProducts=(e)=>{
    if(e.target.value===""){
      setSize(e.target.value)
      setProducts(product.products)
    }
    else{
    //  let a= product.products.filter(product=>product.availableSizes.indexOf(e.target.value) >=0)
      setSize(e.target.value)
      setProducts(product.products.filter(item=>item.availableSizes.includes(e.target.value)))
      console.log("hvu", )
    }
  
  }

  const sortProducts=(e)=>{
    console.log("sortProducts",e.target.value)
    setSort(e.target.value)
    setProducts(products.slice().sort((a,b)=>sort==="Lowest"?a.price<b.price?1:-1:sort==="Highest"?a.price>b.price?1:-1:a._id<b._id?1:-1))
  }


  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter count={products.length} size={size} sort={sort} filterProducts={filterProducts} sortProducts={sortProducts} />
            <Products products={products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All rights are reserved.</footer>
    </div>
  );
}

export default App;
