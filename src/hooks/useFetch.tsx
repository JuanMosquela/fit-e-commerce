import { collection, getDocs } from "firebase/firestore"
import { db } from "../utils/firebase-config"
import { Product } from "../utils/interfaces"
import {useState} from 'react'

export const useFetch = ()  => {

    const [dataProducts, setDataProducts] = useState<Product[]>([])

    const [loading, setLoading] = useState(true)

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


  return  {
    dataProducts , loading 
  }
}
export default useFetch