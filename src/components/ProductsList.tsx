import {useEffect, useState} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase-config'
import { Product } from '../utils/interfaces'
import CardProduct from './CardProduct'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'


import { AiOutlineReload } from 'react-icons/ai'
import { IoIosArrowDown, IoIosArrowUp, IoIosFitness, IoIosOptions } from 'react-icons/io'
import { FaHeartbeat } from 'react-icons/fa'

interface Props {
  inputValue: string
}



const categories = ['mancuernas', 'suplementos', 'accesorios']



const ProductsList = ({ inputValue } : Props) => {

    const [dataProducts, setDataProducts] = useState<Product[]>([])

   

    const [loading, setLoading] = useState<boolean>(true)    

    const [category, setCategory] = useState<Product[]>([])

    const [allCategories, setAllCategories] = useState<string[]>([])    

    const [productsPerPage, setProductsPerPage] = useState(12)    

    const [isOpen, setIsOpen] = useState<boolean>(false)
    

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
          
      })} catch (error) {
          console.log(error)
          setLoading(false)
          
        } finally{
          setLoading(false)
        }
       }
      fetchProducts() 
      
      
      
  }, [])

    const handleCategory = ( category:string) => {
      
      const arrayFilter = dataProducts.filter(product => {
        return category!== 'all' ? product.category === category : product   
      })
      console.log({arrayFilter})
      setCategory(arrayFilter)
    } 


    // Get current page

    const loadMore = () => setProductsPerPage(prev => prev + 10)    


  return (
    <section className='container-products'>     

      <aside className='filter-options-container'>
        <nav className="aside-wrapper">          
            <div              
              className="aside-filter">
              <div className='filter-title'>
                <IoIosOptions />
                <span>Filtros</span>
              </div>

              <div 
                style={{ display:'flex', flexDirection:'column' }}
                >
                <div className="filter-option">
                Categorias
                { isOpen ? 
                  <IoIosArrowUp onClick={() => setIsOpen(prev => !prev)}  />
                  :
                  <IoIosArrowDown onClick={() => setIsOpen(prev => !prev)} />  }
                </div>
                <div>
                  {
                    isOpen && (
                      categories.map(category => (
                        <div className='option-group'>
                          <input onChange={() => handleCategory(category)} type="checkbox" name={category}  />
                          <label htmlFor={category}>{category}</label>
                        </div>

                      ))

                    )
                  }
                </div>

              </div>

              
              
              
            </div>

         
        </nav>
      </aside>
    

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
          {dataProducts.slice(0, productsPerPage).filter(product => 
            product.title.toLowerCase().includes(inputValue)).map(product => (
            <Link key={product.id} to={`/productDetail/${product.id}`}>
              <CardProduct  product={product} />
            </Link>
        ))}
        </div>


        
      }   
    {/* <button 
      className='load-button'
      onClick={() => loadMore()}>
        Load more
        <AiOutlineReload className='icon-load' />
    </button> */}
         

    </section>
  )
}
export default ProductsList