import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartWidget = () => {

  const {cart: { quantity }}: any = useSelector((state) => state)

  console.log(quantity)

  return (
    <Link to='/cartlist' className='cart-icon'>
        <AiOutlineShoppingCart />
        <span>{quantity}</span>
    </Link>
  )
}
export default CartWidget