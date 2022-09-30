import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../utils/firebase-config"
import { Product } from '../utils/interfaces'
import { CircularProgress, Skeleton } from "@mui/material"
import ProductDetail from "../components/ProductDetail"



const ProductDetailContainer = () => {

    const { id } = useParams()

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
    <div className='container product-detail-container'>
        {
            !product 
            ? <div className="item-container">
            <Skeleton variant='rectangular'  width={300} height={380} animation='wave'  />
            <div>
              <Skeleton variant='text' width='50%' height={40} animation='wave'  />
              <Skeleton variant='text' width='60%' height={40} animation='wave'  />
              <Skeleton variant='text' width={320} height={40} animation='wave'  />
              <Skeleton variant='text' width={320} height={40} animation='wave'  />
              <Skeleton variant='text' width={320} height={40} animation='wave'  />
              <Skeleton variant='text' width={320} height={40} animation='wave'  />
              <Skeleton variant='text' width={320} height={40} animation='wave'  />
              <Skeleton variant='text' width={320} height={40} animation='wave'  />
              <Skeleton variant='text' width={320} height={40} animation='wave'  />
            </div>
              
           </div>
            : <ProductDetail product={product} />
        }
        
    </div>
  )
}
export default ProductDetailContainer