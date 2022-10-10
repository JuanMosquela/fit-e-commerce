
import './App.css'
import Navbar from './components/Navbar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserProvider';


function App() {

   const {user} = useContext(UserContext)

    const navigate = useNavigate()

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);


  return (
    <div className="App">
      <Navbar />
      <>
        <Outlet />   
      </>
      <Footer />
      
    </div>
  );
}

export default App;