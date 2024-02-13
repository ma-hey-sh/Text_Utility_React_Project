import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


// alert("Welcome User");

function App() {
  const [mode, setmode] = useState("light")
  
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "grey"
    }

    else {
      setmode('light')
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <>
    <Navbar title="Text utility app" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-9">
    <TextForm heading="Heading" value="text" title="Type Below!"/>
    </div>
    </>
  );
}

export default App;
