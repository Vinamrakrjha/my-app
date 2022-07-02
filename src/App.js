// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert'
// import About from './components/About'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showALert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#041E42';
      showALert("success", "Dark Mode Enabled");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showALert("success", "Light Mode Enabled");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
        <Navbar naam={"TextUtils"} About={"ABOUT"} mode={mode} togglemode={toggleMode} Dmode={mode === 'dark' ? "Disable Dark Mode" : "Enable Dark Mode"} />
        <Alert alert={alert} />
        <div className="container my-3">
            {/* <About/> */}
            <Textarea heading={"Enter text to analyze"} mode={mode} showALert={showALert}/>
        </div>
      {/* </Router> */}
    </>

  );
}

export default App;
