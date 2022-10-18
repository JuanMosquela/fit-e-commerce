import {useEffect, useState} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase-config'
import { Product } from '../utils/interfaces'
import CardProduct from './CardProduct'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import {BiSearch} from 'react-icons/bi'
import Title from './Title'


const ProductsList = () => {

    const [dataProducts, setDataProducts] = useState<Product[]>([])

    const [inputValue, setInputValue] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(true)    

    const [category, setCategory] = useState<Product[]>([])

    const [isClicked, setIsClicked] = useState<boolean>(false)
    

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

    const handleCategory = (category:string) => {
      const arrayFilter = dataProducts.filter(product => {
        return category!== 'all' ? product.category === category : product   
      })
      console.log({arrayFilter})
      setCategory(arrayFilter)
    }

   

    
    


  return (
    <section className='container-products'>

      <Title title='Our products' subtitle='Selling' />

      <div className='filter-options-container'>
        <select onChange={(e) => handleCategory(e.target.value)}>
          <option value={''}>Search by category</option>
          <option value='all'>Show all</option>
          <option value='standard'>Standard</option>
          <option value='isolada'>Isolada</option>
          <option value='vegetariana'>Vegetariana</option>
        </select>     
        
        <div className="input-container">
          <input
            className={isClicked ? `filter-input clicked` : 'filter-input'} 
            
            type="text"
            value={inputValue}
            placeholder={isClicked ? `Search products by name` : ``}
            onChange={(e) => setInputValue(e.target.value)} 
            
          /> 
          <BiSearch className='search-icon' onClick={() => setIsClicked(true)} />  
        </div>
    </div>
    

      {
        loading 
        ?
        <CircularProgress />
        :
        category.length > 0
        ?
        <div className='grid-container'>
          {category.filter(product => 
            product.title.toLowerCase().includes(inputValue)).map(product => (
            <Link key={product.id} to={`/productDetail/${product.id}`}>
              <CardProduct  product={product} />
            </Link>
        ))}
        </div>
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