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
import Pagination from './Pagination'

interface Props {
  inputValue: string
}



const categories = ['all', 'mancuernas', 'suplementos', 'accesorios', 'maquinas','zapatillas']


const ProductsList = ({ inputValue } : Props) => {

    const [dataProducts, setDataProducts] = useState<Product[]>([])   

    const [loading, setLoading] = useState<boolean>(true)    

    const [category, setCategory] = useState<Product[]>([])

    const [allCategories, setAllCategories] = useState<string[]>([]) 

    const [currentPage, setCurrentPage] = useState(1);
     

    const [productsPerPage, setProductsPerPage] = useState(10)    

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [isClicked, setIsClicked] = useState<boolean>(false)

    console.log(currentPage)
    

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

  const lastPostIndex = currentPage * productsPerPage;
  const firstPostIndex = lastPostIndex - productsPerPage;
  const currentPosts = dataProducts.slice(firstPostIndex, lastPostIndex);
  

    const handleCategory = ( category:string) => {
      setIsClicked(prev => !prev)       
      const arrayFilter = dataProducts.filter(product => {
        return category!== 'all' ? product.category === category : product   
      })
      console.log({arrayFilter})
      setCategory(arrayFilter)
    }    

      


  return (
    <section className='container-products'>      
        <nav className="aside-wrapper">          
            <ul              
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
            </ul>         
        </nav>
       

      <div>
      <Pagination
        totalPosts={dataProducts.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />  

      {        
        category.length > 0 && isClicked ?

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
          {dataProducts.slice(firstPostIndex, lastPostIndex).filter(product => 
            product.title.toLowerCase().includes(inputValue)).map(product => (
            <Link key={product.id} to={`/productDetail/${product.id}`}>
              <CardProduct  product={product} />
            </Link>
        ))}
        </div>


        
      }   
      </div>


       
    
    
         

    </section>
  )
}
export default ProductsList