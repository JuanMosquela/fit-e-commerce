import { Box } from '@mui/material'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { useState } from 'react'

import { removeFromFav, useCartSelector } from '../redux/shoppingCartRedux'
import { useDispatch, useSelector } from 'react-redux'



const Navbar = () => {

   const dispatch = useDispatch()

  const [isHovered, setIsHovered] = useState<boolean>(false)

  const { favProducts } = useSelector(useCartSelector)


  return (
    <header>
        <div 
          className="header-wrapper">
            <Link className='logo' to='/'>physical point</Link>
           
            <Box sx={{
              display:'flex',
              gap:3,
              justifyContent:'space-between',
              height:'100%',
              alignItems:'center'
            }}>
            
            <AiOutlineHeart 
              className='fav-container'
              
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)} 
               />
            {
              isHovered && 
              <div 
                className="fav-products-wrapper" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} >
                  <h4 className='title'>Favorites</h4>
        {

            favProducts.map(product => (
                <div className="fav-product">
                    <img src={product.pictureURL[0]} alt={product.title}  />
                    <div className="content">
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => dispatch(removeFromFav(product))}>Remove</button>
                    </div>

                </div>
            ))

        }
    </div>
            }
            
            <CartWidget />
            </Box >
            

        </div>
    </header>
  )
}
export default Navbar