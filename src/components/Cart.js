import React,{useState} from "react";
import formatter from "./util"

export default function Cart(props) {
  const [checkout,setCheckout]=useState(false)
  const [formData,setFormData]=useState({})
  
  const handleInput=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

console.log(formData)

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log("submittt")
  props.createOrder(formData);
}

  return (
    <div>
      {props.cartItems.length !== 0 ? (
        <div className="cart cart-header">
          You have {props.cartItems.length} items in cart.
        </div>
      ) : (
        <div className="cart cart-header">
          No Item In Cart
        </div>
      )}
      <div className="cart">
        <ul className="cart-items">
          {props.cartItems.map((item) => {
            return (
              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.title}></img>
                </div>
                <div>
                  <div>{item.title}</div>
                  <div className="right">
                      {formatter(item.price)}x {item.count}{" "}
                  <button onClick={() => props.removeItem(item)}>
                    Remove
                  </button>
                  </div>
                  
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {
          props.cartItems.length!==0?(
            <div className="cart">
          <div className="total">
              Total {" "}
              {console.log("total is ===>",props.cartItems)}
                {
                    formatter(props.cartItems.reduce((a,c)=>a+(c.price*c.count),0))
                }
          </div>
          <button className="button primary" onClick={()=>setCheckout(true)}>
                Proceed
          </button>
          </div>):""}

          {checkout&&
          <div className="cart">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <ul>
                    <li>
                      <label>Email</label>
                      <input type="email" name="email" onChange={(e)=>handleInput(e)}/>
                    </li>
                    <li>
                      <label>Name</label>
                      <input type="text" name="name" onChange={(e)=>handleInput(e)}/>
                    </li>
                    <li>
                      <label>Address</label>
                      <input type="text" name="address" onChange={(e)=>handleInput(e)}/>
                    </li>
                    <li>
                      <button className="button primary" type="submit" value="Submit">Order</button>
                    </li>

                  </ul>
                 </form>
            </div>
            </div>}
    </div>
  );
}
