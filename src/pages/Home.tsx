import { Button } from "@mui/material"
import {Link} from 'react-router-dom'
import ProductsList from "../components/ProductsList"

const Home = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <span>Let´s do it</span>
        <h1>Start working out today</h1>
        <Link to='/'>
          <Button variant="contained" sx={{
            backgroundColor:'var(--color-orange)',
            fontWeight:'bold',
            '&:hover': {
              backgroundColor: 'var(--color-orange)'
            }
            }}>
              Start shopping
          </Button>
        </Link>

      </div>
      
      

    </section >
    
    <ProductsList />
    </>
  )
}
export default Home