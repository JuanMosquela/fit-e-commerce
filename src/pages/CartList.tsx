import { useSelector } from "react-redux"
import ButtonCounter from "../components/ButtonCounter";
import { useCartSelector } from "../redux/shoppingCartRedux"
import { Product } from "../utils/interfaces"


type Props = {
  src?: string | undefined;
};


const CartList = () => {

  const { cart } = useSelector(useCartSelector)

  console.log(cart)

  


  return (
    <table>
      {cart.map(product => (
        <div className="product-info">
          <img src={product.pictureURL[0]} alt="" />
          <h4>{product.title}</h4>
          <span>{product.amount}</span>
          <ButtonCounter />
          <h5>{product.price}</h5>

        </div>

      ))}
    </table>
  )
}
export default CartList