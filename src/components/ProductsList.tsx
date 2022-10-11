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

    const [filter, setFilter] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(true)   
    
    const [category, setCategory] = useState<Product[]>([])

    const [hover, setHover] = useState<boolean>(false)

    

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

    const handleCategory = (category : string) => {

      const filterArray = dataProducts.filter(product => {
        return product.category === category
      })
      setCategory(filterArray)

    }

     console.log(category)
    


  return (
    <section className='container-products'>

      <Title title='Our products' subtitle='Selling' />

      <div className='filter-options-container'>
        <input
          className="filter-input" 
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)} 
        />
        <div 
          className="select"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
          categories
          {
            hover && 
            <ul>
              <li onClick={() => handleCategory('all products')}>All products</li>
              <li onClick={() => handleCategory('standard')}>Standard</li>
              <li onClick={() => handleCategory('vegetariana')}>Vegetariana</li>
              <li onClick={() => handleCategory('isolada')}>Isolada</li>
          </ul>
          }
        </div>
        
    </div>

      {
        loading 
        ?
        <CircularProgress />
        :
        <div className='grid-container'>
          {dataProducts.filter(product => 
            product.title.toLowerCase().includes(filter) ||
            product.category.includes(category)).map(product => (
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