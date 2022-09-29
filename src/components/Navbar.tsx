import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const navbarLinks = ['store', 'about', 'contact']

const Navbar = () => {
  return (
    <header>
        <div className="header-wrapper">
            <Link className='logo' to='/'>physical point</Link>
            <nav className='navbar'>
                <ul>
                    {navbarLinks.map(link => (
                        <Link to={`/${link}`}>{link}</Link>
                    )) }
                </ul>

            </nav>
            <CartWidget />

        </div>
    </header>
  )
}
export default Navbar