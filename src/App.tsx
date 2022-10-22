
import './App.css'
import Navbar from './components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import { useEffect } from 'react';



function App() {

  

    

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