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

    const [view, setView] = useState(false)

    const dispatch = useDispatch()

    const handleClick = (product : Product) => {
      dispatch(addToCart(product))
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
            <ButtonCounter />
            <button 
              className="add-button"
              onClick={() => handleClick(product)}>
                <BsFillCartPlusFill />
                Add to Cart
            </button>
          </div>
        </div>

    </div>
  )
}
export default ProductDetail