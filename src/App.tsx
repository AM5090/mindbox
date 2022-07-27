import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Active } from './pages/Active';
import { AllTasks } from './pages/AllTasks';
import { Completed } from './pages/Сompleted';
import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav className='App-nav'>
          <NavLink to={'/'}>All</NavLink>
          <NavLink to={'/active'}>Active</NavLink>
          <NavLink to={'/completed'}>Completed</NavLink>
        </nav>
      </header>
      <div className="App-content">
        <Routes>
          <Route path='/' element={<AllTasks/>} />
          <Route path='/active' element={<Active/>} />
          <Route path='/completed' element={<Completed/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
