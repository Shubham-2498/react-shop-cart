import React from 'react'
import currencyFormatter from "./util"

export default function Products(props) {
    console.log(props)
    return (
        <div>
            <ul className="products">
                {props.products?props.products.map((product)=>(
                    <li key={product._id}>
                        <div className="product">
                            <a href={"#"+product._id}>
                                <img src={product.image} alt={product.title}/>
                                <p>
                                {product.title}
                            </p>
                            </a>
                            
                            <div className="product-price">
                                <div>{currencyFormatter(product.price)}</div>
                                <button onClick={()=>props.addToCart(product)} className="button primary">Add to cart</button>
                            </div>
                        </div>
                    </li>
                )):<h1>No Product Found</h1>}
            </ul>
        </div>
    )
}
