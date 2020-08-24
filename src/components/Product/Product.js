import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product = (props)=>{
    const{name,img,seller,price,stock}=props.product;
    return(
        <div className="product">
            <div className="product-img">
              <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>Seller is:{seller}</small></p>
                <p><small>Price is:{price}</small></p>
                <br/>
                 <p><small>only{stock} in stock</small></p>
                 <button 
                 onClick={()=>props.handleProduct(props.product)}
                 className="product-btn">
                <FontAwesomeIcon icon={faShoppingCart}/>add to cart</button>
            </div>
        </div>
    );
};
export default Product;