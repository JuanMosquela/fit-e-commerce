
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import CartList from './pages/CartList';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProductDetailContainer from './pages/ProductDetailContainer';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import UserProvider from './context/UserProvider';
import SuccessPage from './pages/SuccessPage';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <UserProvider>
      <Routes>
        
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />          
          <Route path='/contact' element={<Contact />} />         
          <Route path='/cartlist' element={<CartList />} />
          <Route path='/productDetail/:id' element={<ProductDetailContainer />} />   
          <Route path='/success' element={<SuccessPage />} />         
        </Route>
      </Routes>

      </UserProvider>
    </Provider>    
  </BrowserRouter>
);


