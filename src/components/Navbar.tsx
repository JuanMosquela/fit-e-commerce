import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'



const Navbar = () => {
  return (
    <header>
        <div 
          className="header-wrapper">
            <Link className='logo' to='/'>physical point</Link>
           
            
            <CartWidget />
            

        </div>
    </header>
  )
}
export default Navbar