import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../utils/firebase-config"
import { Product } from '../utils/interfaces'
import { CircularProgress } from "@mui/material"
import ProductDetail from "../components/ProductDetail"
import SlickCarrusel from "../components/SlickCarrusel"



const ProductDetailContainer = () => {

    const { id } = useParams()

    const [allProducts, setAllProducts] = useState([])

    const [product, setProduct] = useState<Product>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const products = collection(db, 'products')      

            getDocs(products).then(res => {
                const list : any = res.docs.map(product  => ({
                    ...product.data(),
                    id: product.id
                }))  
                setAllProducts(list)      
            
            setProduct(list.find((item : Product ) => item.id === id))})
            setLoading(false)
                
            } catch (error) {
                console.log(error)
                setLoading(false)
                
            } finally{
                setLoading(false)
            }

        }

        fetchProduct()
        
      
    }, [id])    


  return (
    <section>
        <div className='product-detail-container'>
            {
                !product 
                ? <CircularProgress sx={{ color:'var(--color-orange)' }} size='5rem'  />
                : <ProductDetail product={product} />
            }

            
            
        </div>
        <SlickCarrusel products={allProducts} />
    </section>
  )
}
export default ProductDetailContainer