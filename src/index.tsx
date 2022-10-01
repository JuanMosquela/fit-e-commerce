import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import CartList from './pages/CartList';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetailContainer from './pages/ProductDetailContainer';
import Register from './pages/Register';


import { Provider } from 'react-redux';
import store from './redux/store'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cartlist' element={<CartList />} /> 
          <Route path='/productDetail/:id' element={<ProductDetailContainer />} />   
        </Route>
      </Routes>
    </Provider>    
  </BrowserRouter>
);


