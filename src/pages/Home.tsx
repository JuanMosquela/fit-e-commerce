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
        <Link to='/store'>
          <Button variant="contained" sx={{
            backgroundColor:'var(--color-orange)',
            '&:hover': {
              backgroundColor: 'var(--color-orange)'
            }
            }}>
              Start Buying
          </Button>
        </Link>

      </div>
      
      

    </section >
    <ProductsList />
    </>
  )
}
export default Home