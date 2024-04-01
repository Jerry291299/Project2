import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={CLients}>

          <Route path="" Component={Home}></Route>
          <Route path='Detail/:id' Component={Detail}></Route>

          
        </Route>


        <Route path='/Dashboard' Component={Dashboard}>

          <Route path="list" Component={Productslist}></Route>
          <Route path="Add" Component={Addproduct}></Route>
          <Route path="Edit/:id" Component={Editproduct}></Route>


        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;