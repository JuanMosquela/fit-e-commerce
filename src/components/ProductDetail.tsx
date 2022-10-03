import { Product } from "../utils/interfaces"
import { useState } from 'react'
import ButtonCounter from "./ButtonCounter"
import { BsFillCartPlusFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/shoppingCartRedux"

interface Props {
    product: Product
    
}





const ProductDetail = ({ product } : Props ) => {

    const cart = useSelector(state => state)

    const [pictureIndex, setPictureIndex] = useState<number>(0)

    const [counter, setCounter] = useState<number>(0)

    const [view, setView] = useState(false)

    const dispatch = useDispatch()

     const obj = {
      product: product,
      counter: counter
     }

    

    const handleClick = ( obj : any ) => {
      dispatch(addToCart( obj ))
    }

    

    

    const handleCounter = (value: number) : void  => {
      if(counter === 0 && value === -1) return
      setCounter(prev => prev + value) 
    }

    console.log(cart)



  return (
    <div className="product-detail">
        <div className="pictures-wrapper">
            <figure className="main-picture">
                <img src={product.pictureURL[pictureIndex]} alt=""  />
            </figure>
            <div className="picture-options">
                {product.pictureURL.map((picture, index) => (
                    <img key={index} onClick={() => setPictureIndex(index)} src={picture} alt='' />
                ))}
            </div>

        </div>
        <div className="product-info">
          <h4>{product.category}</h4>
          <h3>{product.title}</h3>
          <p>{view ? product.description : product.description?.substring(0,300)}..</p>
          <button className="readmore" onClick={() => setView(!view)}>{view ? 'Hide text' : 'Read more'}</button>
           
          <span className="price">$ {product.price}</span>
          <div className="button-wrapper">
          <button className="button-group">
            <span onClick={() => handleCounter(-1)}>-</span>
            <span>{counter}</span>
            <span onClick={() => handleCounter(1)}>+</span>
          </button> 
            <button 
              className="add-button"
              onClick={() => handleClick(obj)}>
                <BsFillCartPlusFill />
                Add to Cart
            </button>
          </div>
        </div>

    </div>
  )
}
export default ProductDetail