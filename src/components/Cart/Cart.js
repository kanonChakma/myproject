import React from 'react';
import './Cart.css';
const Cart = (props)=>{
    const cart=props.cart;
    const price=cart.reduce((total,Product)=>Product.price+total,0);
    let shipp=0;
    if(price>50){
        shipp=0;
    }
    else if( price>0 && price<50){
      shipp=12.00;
    }
    const tax=price/10;
    const total=tax+shipp+price;
    const precision=(num)=>{
        const value=num.toFixed(2);
        return Number(value);
    }
    return(
        <div>
          <p>Order Summary</p>
          <p><small>item ordered {cart.length}</small></p>
          <p><small>price is: {precision(price)}</small></p>
          <p><small>Shipping cost:{precision(shipp)}</small></p>
          <p><small>total price:{precision(total)}</small></p>
          <button className="cart-btn">Review your order</button>
        </div>
    );
};
export default Cart;