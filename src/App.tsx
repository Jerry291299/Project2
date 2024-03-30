import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CLients from './Layout/CLients';
 // Assuming correct file path
import Home from './Layout/Home';
import Dashboard from './Layout/Dashboard';
import Detail from './Components/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={CLients}>

              <Route path="" Component={Home}></Route>
              <Route path='Detail/:id' Component={Detail}></Route>

          
        </Route>

        <Route path='/Dasboard' Component={Dashboard}>


        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;