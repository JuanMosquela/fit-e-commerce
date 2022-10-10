import {useEffect, useState} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase-config'
import { Product } from '../utils/interfaces'
import CardProduct from './CardProduct'
import { Link } from 'react-router-dom'
import { CircularProgress, Skeleton } from '@mui/material'
import Title from './Title'




const ProductsList = () => {

    const [dataProducts, setDataProducts] = useState<Product[]>([])

    const [loading, setLoading] = useState(true)

    

    useEffect (() => {

       const fetchProducts = () => {
        try {
          const products = collection(db, 'products')      

          getDocs(products).then(res => {
            const list : any = res.docs.map(product => ({
                ...product.data(),
                id: product.id
            }))
          
          setDataProducts(list)
          setLoading(false)
        
      })
          
        } catch (error) {
           console.log(error)
          setLoading(false)
          
        } finally{
          setLoading(false)
        }

       }

       fetchProducts()
      
      
    }, [])


  return (
    <section className='container-products'>

      <Title title='Our products' subtitle='Selling' />


      {
        loading 
        ?
        <CircularProgress />
        :
        <div className='grid-container'>
          {dataProducts.map(product => (
            <Link key={product.id} to={`/productDetail/${product.id}`}>
              <CardProduct key={product.id} product={product} />
            </Link>
        ))}
        </div>
      }


        

    </section>
  )
}
export default ProductsList