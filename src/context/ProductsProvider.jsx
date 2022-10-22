// import { createContext, useState, useEffect } from "react"

// export const ProductsContext = createContext()

//  const ProductsProvider = ({ children }) => {

//   const [favProductsCart, setFavProductsCart] = useState(() => {
//     try {
//       const favCart = localStorage.getItem('favCartProducts')
//       return favCart ? JSON.parse(favCart) : []
      
//     } catch (error) {
//       return []
      
//     }
//   })

//   const addProduct = (product) => setFavProductsCart([...favProductsCart, product])

//    const removeProduct = (product) => {  
//     console.log('vine aca')  
//     const removedProduct = favProductsCart.filter(item => {
//       return item.id !== product.id
//     })   

//     if(removedProduct) setFavProductsCart(removedProduct)

//   }

//   useEffect(() => {
//     localStorage.setItem('favCartProducts', JSON.stringify(favProductsCart))

//      console.log(favProductsCart)
    
//   }, [favProductsCart])
  




//   return (
//     <ProductsContext.Provider value={{ addProduct, removeProduct, favProductsCart }}>
//       {children}
//     </ProductsContext.Provider>
//   )
// }
// export default ProductsProvider