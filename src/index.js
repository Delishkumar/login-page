import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
   
  </Routes>
  </BrowserRouter>
    
  
);

