import React from "react";
import formatter from "./util"

export default function Cart(props) {
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
          <button className="button primary">
                Proceed
          </button>
      </div>
          ):""
      }
      

    </div>
  );
}
