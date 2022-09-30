import CardProduct from './CardProduct'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import useFetch from '../hooks/useFetch'


const ProductsList = () => {

  const { dataProducts, loading } = useFetch()

  return (
    <div className='container-products'>
      {
        loading 
        ? <CircularProgress />
        :
        <>
          {dataProducts.map(product => (
            <Link key={product.id} to={`/productDetail/${product.id}`}>
              <CardProduct key={product.id} product={product} />
            </Link>
        ))}
        </>
      }
    </div>
  )
}
export default ProductsList