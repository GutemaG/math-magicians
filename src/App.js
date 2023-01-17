import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => {
  const style = {
    padding: '2rem',
  };
  return (
    <>
      <NavBar />
      <div style={style}>
        <Outlet />
      </div>
    </>
  );
};

export default App;
