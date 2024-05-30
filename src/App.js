import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react';
import TextForm from './components/TextForm';

function App() {
  const [mode, setmode] = useState('dark')     // whether dark mode is enabled or not
  const togglemode = () => {
    if (mode == 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <div className="conatiner my-3">
        <TextForm heading="Enter the text to analyse" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
