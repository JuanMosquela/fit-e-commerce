import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const ProtectedRoute = () => {

     const { user } = useContext(UserContext)

      const navigate = useNavigate()

    useEffect(() => {
        user ? <Outlet /> : navigate('/login')

    },[user])


  return (        
        <>
            
        </>
        
  )
}
export default ProtectedRoute