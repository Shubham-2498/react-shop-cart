import React,{useState} from "react";
import Fade from "react-reveal/Fade";
import currencyFormatter from "./util";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom"
import formatter from "./util";

export default function Products(props) {
  const [product,setProduct]=useState(null)
  console.log(props);
  const openModal=(product)=>{
    setProduct(product)
  }

  const closeModal=()=>{
    setProduct(null)
  }


  return (
    <div>
      <Fade bottom cascade>
        <ul className="products">
          {props.products ? (
            props.products.map((product) => (
              <li key={product._id}>
                <div className="product" onClick={()=>openModal(product)}>
                  <a href={"#" + product._id} >
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                  </a>

                  <div className="product-price">
                    <div>{currencyFormatter(product.price)}</div>
                    <button
                      onClick={() => props.addToCart(product)}
                      className="button primary"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <h1>No Product Found</h1>
          )}
        </ul>
      </Fade>
      {
        product&&
          <Modal isOpen={true } onRequestClose={closeModal}>
            <Zoom>
              <button onClick={closeModal} className="close-modal">
                X
              </button>
              <div className="product-details">
                <img src={product.image} alt={product.title}/>
                <div className="product-details-description">
                    <p>
                      <strong>{product.title}</strong>
                    </p>
                    <p>
                      <span>{product.description}</span>
                    </p>
                    <p>
                      AvailableSizes: {" "}
                      {product.availableSizes.map(item=>
                        <span>
                            {"  "} <button className="button">{item}</button>
                        </span>
                      )}
                    </p>
                    <div className="product-price">
                          <div>{formatter(product.price)}</div>
                          <button className="button primary" onClick={()=>{
                            closeModal()
                            props.addToCart(product)}}>
                            Add To Cart
                          </button>
                    </div>
                </div>
              </div>
            </Zoom>
          </Modal>
      }
    </div>
  );
}
