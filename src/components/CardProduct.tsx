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
    </div>
  )
}
export default CardProduct