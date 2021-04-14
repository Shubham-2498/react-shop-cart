import React, { useState } from "react";
import "./App.css";
import product from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState(product.products);
  const [size, setSize] = useState(null);
  const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]);
  const [sort, setSort] = useState(null);
  console.log("my products===>", products);


  const filterProducts = (e) => {
    if (e.target.value === "") {
      setSize(e.target.value);
      setProducts(product.products);
    } else {
      setSize(e.target.value);
      setProducts(
        product.products.filter((item) =>
          item.availableSizes.includes(e.target.value)
        )
      );
      console.log("hvu");
    }
  };


  const sortProducts = (e) => {
    console.log("sortProducts", e.target.value);
    setSort(e.target.value);
    setProducts(
      products
        .slice()
        .sort((a, b) =>
          sort === "Lowest"
            ? a.price < b.price
              ? 1
              : -1
            : sort === "Highest"
            ? a.price > b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        )
    );
  };


  const addToCart = (product) => {
    console.log("in add tt",product);
    let cartItem = cartItems.slice();
    let alreadyInCart = false;
    cartItem.forEach((item) => {
      if (item._id === product._id) {
        console.log("in old",item.count);
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      console.log("in new");
      cartItem.push({...product,count:1})
      // setCartItems([...cartItems,{...product,count:1}]);
    }
    setCartItems(cartItem)
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
    console.log("cart is===>", cartItems);
  };

  const removeItem=(product)=>{
    console.log("hii",product )
    setCartItems(cartItems.filter(item=>item._id!==product._id))
    localStorage.setItem("cartItems",JSON.stringify(cartItems.filter(item=>item._id!==product._id)))
  }

  const createOrder=(order)=>{
    alert(`Do you want to confirm order${order.name}`)
  }

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Products products={products} addToCart={addToCart} />
          </div>
          <div className="sidebar">
            <Cart cartItems={cartItems} removeItem={removeItem} createOrder={createOrder}/>
          </div>
        </div>
      </main>
      <footer>All rights are reserved.</footer>
    </div>
  );
}

export default App;
