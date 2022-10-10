import { useEffect } from 'react'

import { runConfetti } from '../utils/Confetti.js'

import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import { BsFillBagCheckFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { clearCart } from '../redux/shoppingCartRedux'


const SuccessPage = () => {

     
    
     const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCart())  
        runConfetti()    
      
    }, [])
    


  return (
    <div className='success'>
        <div className="success-content">
          <BsFillBagCheckFill className='success-icon' />
          <h1>Thank you for your order</h1>
          <Link to='/'>
            <Button                                    
              variant='contained'                                                             
                                                                                  
              sx={{ 
                                                                              
                  backgroundColor:'#333',
                  fontSize:'1.4rem',
                  '&:hover': {
                        background: "#faba42",
                  },
                  marginLeft:'0px !important',
      
              }}
              >
              Go Back
          </Button> 
        </Link>
        </div>
    </div>
  )
}
export default SuccessPage