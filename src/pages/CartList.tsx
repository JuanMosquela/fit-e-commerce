import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import EmpyCart from "../components/EmpyCart";
import { Product } from "../utils/interfaces";
import {removeItem,
        decrese,
        useCartSelector,
        increse,
        reloadCart, 
        clearCart } from "../redux/shoppingCartRedux"



const CartList = () => {

  

  const { cart, totalPrice } = useSelector(useCartSelector) 
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(reloadCart())    

  }, [cart])

  const handleRemove = (product : Product) => {
    dispatch(removeItem(product))
    

  }

   const handleDecrese = (product : Product) => {
    dispatch(decrese(product))
    

  }
  const handleIncrece = (product: Product) => {
    dispatch(increse(product))
  }

  console.log(totalPrice)
  


  return (
    <section className="cart-container">
      {
        cart.length === 0
        ? <EmpyCart />         
        :
        <>
          <div className="title-wrapper">
            <h3>Product</h3>
            <h3>Amount</h3>
            <h3>Quantity</h3>
            <h3>Price</h3>
          </div>
        
          {cart.map(product => (
            <div className="cart-item" key={product.id}>
              <div className="item-info">
                <img src={product.pictureURL[0]} alt={product.title} />
                <div>
                  <h4>{product.title}</h4>
                  <h5>{product.category}</h5>
                  <button onClick={() => handleRemove(product)}>Remove</button>
                </div>
              </div>
              <span>$ {product.price}</span>
              <div className="amount-button">
                <button onClick={() => handleDecrese(product)}>-</button>
                <span>{product.amount}</span>
                <button onClick={() => handleIncrece(product)}>+</button>
              </div>
              
              <span>$ {product.price*product.amount}</span>         
              
            </div>
          ))} 
          <div className="cart-summary">
            <button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear Cart</button>
            <div className="cart-checkout"> 
              <div className="checkout-info">
                <h3>Subtotal</h3>
                <span>{totalPrice}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button className="checkout-button">
                
                Check out
              </button>
            </div>
          </div>  
        </> 
      } 
      
    </section>
  )
}
export default CartList