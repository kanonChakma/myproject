import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => { 
    // console.log(fakeData);
    const data=fakeData.slice(0,10);
    const[products,setProducts]=useState(data);
    const[cart,setCart]=useState([]);

    const handleProduct=(pro)=> {
        const newCart=[...cart,pro];
        setCart(newCart);
    };
    return(
        <div className="shop-container">
            <div className="product-container">
                 {products.map(pd=><Product
                 handleProduct={handleProduct} 
                 product={pd}
                 ></Product>)}
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Shop;