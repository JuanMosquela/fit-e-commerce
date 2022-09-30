import { Product } from "../utils/interfaces"
import { useState } from 'react'
import ButtonCounter from "./ButtonCounter"

interface Props {
    product: Product
}

const ProductDetail = ({ product } : Props ) => {

    const [pictureIndex, setPictureIndex] = useState<number>(0)



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
          <p>{product.description}</p>
          <span className="price">$ {product.price}</span>
          <ButtonCounter />
        </div>

    </div>
  )
}
export default ProductDetail