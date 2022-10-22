import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useState } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { addToFav, useCartSelector } from "../redux/shoppingCartRedux"

const Heart = ({ product }) => {

  const state = useSelector(useCartSelector)

  // const { removeProduct, addProduct, favProductsCart } = useContext(ProductsContext)

  const dispatch = useDispatch()

  

  

  const [fav, setFav] = useState(() => {
    try {
      const localStorageFavState = localStorage.getItem('fav')
      return localStorageFavState ? JSON.parse(localStorageFavState) : false
      
    } catch (error) {
      return false
      
    }
  })

  const handleClick = async(e) => {
      
    e.preventDefault()
    setFav(prev => !prev)    
    // addProduct(product) 
    dispatch(addToFav(product))

  }

   const handleClickRemove = (e) => {
    e.preventDefault()
    setFav(prev => !prev) 
    
    // removeProduct(product)
   }

  


   

 

  


  

 

  


  return (
    <div className="hearts" >
          {fav 
          ? <AiFillHeart onClick={(e) => handleClickRemove(e)} className="heart-icon full" /> 
          : <AiOutlineHeart onClick={(e) => handleClick(e)} className="heart-icon empty" />}
        </div>
  )
}
export default Heart