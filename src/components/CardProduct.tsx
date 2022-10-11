import { Product } from "../utils/interfaces"


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
          
        <h4>$ {product.price}</h4>         
    </div>
  )
}
export default CardProduct