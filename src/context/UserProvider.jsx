import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { firebaseAuth } from "../utils/firebase-config"

export const UserContext = createContext()

const UserProvider = ({ children }) => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    email:'',
    password:''
  })

  const [user, setUser] = useState(false)

  const [error, setError] = useState(false)

  const handleChange = (e  => {
    
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })    

  })
  
   const handleLogIn = async() => {
    setLoading(true)   
    try {
      const {email, password} = form;
      await signInWithEmailAndPassword(firebaseAuth, email, password)   
        
      
    } catch (error) {
      console.log(error)      
    }finally {
      setLoading(false)    
     }
   }

   const handleSignIn = async() => {
    setLoading(true) 
    try {
      const {email, password} = form;
      await createUserWithEmailAndPassword(firebaseAuth, email, password) 
          
      
    } catch (error) {
      console.log(error)      
    }finally {
      setLoading(false)    
     }
   }

   const handleLogout = async() => {
    setLoading(true) 
    try {
      await firebaseAuth.signOut(firebaseAuth) 
          
      
    } catch (error) {
      console.log(error)      
    } finally {
      setLoading(false)    
     }
   }
   
   

   useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      (!currentUser) ? setError(true) : setUser(true)     
          
    });
  }, []);

   


  return (
    <UserContext.Provider value={{ handleChange, handleLogIn, handleSignIn, handleLogout,  user, form, loading, error  }}>
        {children}
    </UserContext.Provider>
  )
}
export default UserProvider