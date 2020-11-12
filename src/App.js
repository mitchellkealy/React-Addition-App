import React from 'react';
import logo from './logo.svg';
import './App.css';
import Addition from './Addition';

function App() {
  return (
    <>
      <Addition numberOne={1} numberTwo={1} />
      <Addition numberOne={10} numberTwo={12} />
      <Addition numberOne={20} numberTwo={32.53214} />
    </>
  );
}

export default App;