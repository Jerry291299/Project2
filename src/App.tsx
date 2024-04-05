import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CLients from './Layout/CLients';
 // Assuming correct file path
import Home from './Layout/Home';
import Dashboard from './Layout/Dashboard';
import Detail from './Components/Detail';
import Addproduct from './Components/Admin/Addproduct';
import Editproduct from './Components/Admin/Editproduct';
import Productslist from './Components/Admin/Productslist';
import login from './Components/login';
import register from './Components/register';
import { IProduct } from './Interface/product';
import { getAllProduct } from './service/productService';

function App() {
  const [products,setProduct] = useState<IProduct[]>([])
  useEffect(()=>{
    (async ()=>{
      const products = await getAllProduct()
      setProduct(products)
    })()
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={CLients}>

          <Route path="" Component={Home}></Route>
          <Route path='Detail/:id' Component={Detail}></Route>


          
        </Route>

        <Route path="/login" Component={login}></Route>
        <Route path="/register" Component={register}></Route>


        <Route path='/Dashboard' Component={Dashboard}>

          <Route path="list" element={<Productslist products={products} setProduct={setProduct}/>}></Route>
          <Route path="Add" Component={Addproduct}></Route>
          <Route path="list/edit/:id" Component={Editproduct}></Route>


        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;