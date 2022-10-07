import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useState } from 'react'


import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'


const SignUp = () => {

  const [password, setPassword] = useState(false)

  const { handleSignIn, handleChange, form, loading  } = useContext(UserContext)



  return (
    <div className='sign-up' >
      
    <div style={{
      minHeight:'100vh',     
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
     
      
    }} >
      
      
      <Box sx={{
        textAlign:'center',
        color:'#FFF',
        maxWidth:'600px',
        backgroundColor:'rgba(0,0,0,.8)',
        padding:'1rem 2rem',
        borderRadius:'5px'
        
      }}>
        <Typography
          variant='h2'
          component='h1' 
          mb={2} 
          sx={{fontWeight:'700'}}>
            Start training today
        </Typography>
        <Typography 
          variant='h5'
          mb={3}
          sx={{ fontWeight:'600'}}>
            
            Train anywhere, anytime
        </Typography>
        <Typography
          variant='h6'
          mb={2}
          >
            Ready to change your life? Enter your email to create or restart membership
        </Typography>
        <Box sx={{
          display:'grid',
          gridTemplateColumns:'1fr 1fr'
        }}>
          <input 
            type="text" 
            name='email'
            value={form.email}
            onChange={(e) => handleChange(e)} 
            placeholder='Email address'
            style={{
              
              padding:'15px 20px'
            }} />
            {password && (
              <input 
              type="password" 
              name='password' 
              value={form.password}
              onChange={(e) => handleChange(e)} 
              placeholder='Password'
              style={{
                
                padding:'15px 20px'
              }} />
            )}
          {!password && (
            <Button 
            variant="contained"
            onClick={() => setPassword(true)}
            sx={{
                fontSize:{md:'17px', sm:'14px', xs:'10px'},
                backgroundColor:'var(--color-orange)',            
                textTransform:'capitalize', 
                padding:'12px 20px',                            
                color:"#FFF",
                
                '&:hover': {
                  backgroundColor:'var(--color-orange)'
                }
            }}>
              {loading ? <CircularProgress style={{color:'rgba(255,255,255,.5)'}} /> : 'Get Started' }
           
            <MdOutlineArrowForwardIos style={{marginLeft:'15px'}} />                           
          </Button>       

          )}
          
        </Box>
        {password && (
            <Button 
            variant="contained"
            onClick={() => handleSignIn()}
            
            sx={{
                marginTop:'1rem',
                fontSize:{md:'17px', sm:'14px', xs:'10px'},
                backgroundColor:'var(--color-orange)',            
                textTransform:'capitalize', 
                padding:'12px 20px',                            
                color:"#FFF",
                span:'2',
                
                '&:hover': {
                  backgroundColor:'var(--color-orange)'
                }
            }}>
            Sign Up
            <MdOutlineArrowForwardIos style={{marginLeft:'15px'}} />                           
          </Button>
          )}
          <button className='go-to'>Alredy have an account ? <Link to='/logIn'>Log In now</Link></button>
      </Box>
    </div>
    </div>
  )
}
export default SignUp