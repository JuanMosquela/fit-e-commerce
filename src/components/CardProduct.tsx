import { Product } from "../utils/interfaces"
import Heart from "./Heart"
import { useState } from 'react'


interface Props {
    product: Product
}



const CardProduct = ({ product }: Props ) => {

  const [isHovered, setIsHovered] = useState<boolean>(false)

  


  return (
    <div 
      className={isHovered ? 'product-card hovered' : 'product-card'}
      onMouseEnter={() => setIsHovered(prev => !prev)}
      onMouseLeave={() => setIsHovered(prev => !prev)}>
        <img 
            src={product.pictureURL[0]} 
            alt={product.title}
        />
        <img 
            src={product.pictureURL[1]} 
            alt={product.title}
        />
        <Heart product={product} />
        <div className="product-content">
          
          <h4>{product.title.toLowerCase()}</h4>          
          <h5>$ {product.price}</h5>  
        </div>       
    </div>
  )
}
export default CardProduct