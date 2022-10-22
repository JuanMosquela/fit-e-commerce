

import { Product } from "../utils/interfaces"
import Heart from "./Heart"


interface Props {
    product: Product
}



const CardProduct = ({ product }: Props ) => {

  


  return (
    <div className="product-card">
        <img 
            src={product.pictureURL[0]} 
            alt={product.title}
        />
        <Heart product={product} />
        <div className="product-content">
          <span>{product.category}</span>
          <h4>{product.title}</h4>          
          <h5>$ {product.price}</h5>  
        </div>       
    </div>
  )
}
export default CardProduct