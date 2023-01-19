import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Quote from './components/Quote';

const App = () => {
  const style = {
    padding: '2rem',
  };
  return (
    <>
      <NavBar />
      <div style={style}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
