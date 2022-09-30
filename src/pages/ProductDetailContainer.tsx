import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../utils/firebase-config"
import { Product } from '../utils/interfaces'
import { CircularProgress, Skeleton } from "@mui/material"
import ProductDetail from "../components/ProductDetail"
import useFetch from "../hooks/useFetch"



const ProductDetailContainer = () => {

    const { id } = useParams() 

    const [product, setProduct] = useState<Product>() 

    const {dataProducts } = useFetch()  

    useEffect(() => {             
            
        setProduct(dataProducts.find((item : Product ) => item.id === id))
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