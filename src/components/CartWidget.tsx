import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const CartWidget = () => {
  return (
    <Link to='/cartlist' className='cart-icon'>
        <AiOutlineShoppingCart />
        <span>1</span>
    </Link>
  )
}
export default CartWidget