import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

import {AiFillEye, AiOutlineEyeInvisible} from 'react-icons/ai'


const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

   const {handleChange, handleLogIn, form, loading, error} = useContext(UserContext)

  return (
    <div className='log-in'>
      
    <div style={{
      minHeight:'100vh',     
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
      
    }} >
      
      
      <Box sx={{
        textAlign:'center',
        color:'#FFF',
        backgroundColor:'rgba(0,0,0,.8)',
        width:'460px',
        minHeight:'300px',
        padding:'3rem 5rem',
        
      }}>
        <Typography
          variant='h4'
          component='h1'
          mb={3}
          sx={{
            textAlign:'left',
            fontWeight:'600'
          }}>
            Sign In
        </Typography>
        <input
          onChange={(e) => handleChange(e)} 
          type="text" 
          name='email' 
          value={form.email} 
          placeholder='Email address'
          style={{
            display:'block',
            width:'100%',
            borderRadius:'5px',
            padding:'15px 20px',
            backgroundColor:'#333333',
            color:'#FFF',
            marginBottom:'20px',
            fontSize:'1.2rem',
            outline:'none',
            border:'none',
            
          }} />
        <div className="input-group" style={{ position:'relative' }}>
          <input 
            onChange={(e) => handleChange(e)}
            type={showPassword ? 'text' : 'password'} 
            name='password' 
            value={form.password}
            placeholder='Password'
            style={{
              display:'block',
              width:'100%',
              borderRadius:'5px',
              padding:'15px 20px',
              backgroundColor:'#333333',
              color:'#FFF',
              marginBottom:'1rem',
              fontSize:'1.2rem',
              outline:'none',
              border:'none',
              
              
            }} />
          <div 
            style={{ position:'absolute', top:'35%', right:'15px', transform:'scale(1.5)' }} 
            onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <AiFillEye  /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
        
        
            {error &&  <p className='error-message'>Wrong user</p>  }
            
          
        
          
        
          
            

        
          <Button 
            onClick={() => handleLogIn()}
            variant='outlined'
            sx={{
              backgroundColor:'var(--color-orange)',
              color:"#FFF",
              width:'100%',
              padding:'10px 20px',
              textTransform:'capitalize',
               fontWeight:'600',
               fontSize:'1.1rem',
               border:'none',
               outline:'none',
            '&:hover': {
              backgroundColor:'var(--color-orange)',
              border:'none',
               outline:'none',
            }
            }}>
            {loading ? <CircularProgress style={{color:'rgba(255,255,255,.5)'}} /> : 'Sign In' }
          </Button>
        
        <button className='go-to'>Dont have an account yet? <Link to='/signUp'>Sign Up now</Link></button>
        
        
      </Box>
    </div>
    </div>
  )
}
export default Login