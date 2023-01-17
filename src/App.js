import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => (
  <>
    <NavBar />
    <div>
      <Outlet />
    </div>
  </>
);

export default App;
