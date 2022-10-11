import {useEffect, useState} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase-config'
import { Product } from '../utils/interfaces'
import CardProduct from './CardProduct'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import Title from './Title'


const ProductsList = () => {

    const [dataProducts, setDataProducts] = useState<Product[]>([])

    const [inputValue, setInputValue] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(true)    

    

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

      <div className='filter-options-container'>
        <input
          className="filter-input" 
          type="text"
          value={inputValue}
          placeholder='Search products by name'
          onChange={(e) => setInputValue(e.target.value)} 
        />        
        
    </div>

      {
        loading 
        ?
        <CircularProgress />
        :
        <div className='grid-container'>
          {dataProducts.filter(product => 
            product.title.toLowerCase().includes(inputValue)).map(product => (
            <Link key={product.id} to={`/productDetail/${product.id}`}>
              <CardProduct  product={product} />
            </Link>
        ))}
        </div>
      }        

    </section>
  )
}
export default ProductsList