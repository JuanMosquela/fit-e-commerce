import { Button } from "@mui/material"
import { BiSearch } from "react-icons/bi"
import {Link} from 'react-router-dom'
import ProductsList from "../components/ProductsList"
import Services from "../components/Services"
import { useState } from 'react'


const Home = () => {

  const [inputValue, setInputValue] = useState<string>('')


  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <span>Let´s do it</span>
        <h1>Start working out today</h1>
        <p>We have all kinds of higth quality products that will help you reach your goals, not only in the gym but in life</p>
        <div className="input-container">
          <input
            className='filter-input'            
            type="text"
            value={inputValue}
            placeholder='Search products by name'
            onChange={(e) => setInputValue(e.target.value)}            
          /> 
          <BiSearch className='search-icon' />  
        </div>
      </div>
    </section >

    {/* <Services /> */}
    <ProductsList inputValue={inputValue} />
    
    </>
  )
}
export default Home