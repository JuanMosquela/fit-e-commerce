import {useEffect, useState} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase-config'
import { Product } from '../utils/interfaces'
import CardProduct from './CardProduct'




const ProductsList = () => {

    const [dataProducts, setDataProducts] = useState<Product[]>([])

    useEffect (() => {
      
      const products = collection(db, 'products')
      

      getDocs(products).then(res => {
        const list : any = res.docs.map(product => ({
            ...product.data(),
            id: product.id
        }))
        
        setDataProducts(list)
        
      })
    }, [])


  return (
    <div className='container container-products'>
        {dataProducts.map(product => (
            <CardProduct key={product.id} product={product} />
        ))}

    </div>
  )
}
export default ProductsList