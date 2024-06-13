// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import Alert from './components/Alert';
import React ,{ useState } from 'react';

import {      //www.react router declarative
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light'); //whether mode is dark enalbed or not
  const [alert ,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
    
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#03300d';
      showalert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert('Light mode has been enabled', 'Success');
    }
  }
  
  
  return (
    <>
     {/* use of props inside component navbar   */}
    {/* <Navbar title={"TextUtils"} about="About TextUtils"/>  */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    {/* using container divsion built in div in boots for styling */}
    <div className="container my-3"> 
    <Routes>
          <Route path="/about" element ={<About />}>
            
          </Route>
          <Route path="/home" element={<TextForms heading="Enter the text to analyse" mode={mode} showalert={showalert}/>}>
            
          </Route>
      </Routes>
       {/* <TextForms heading="Enter the text to analyse" mode={mode} showalert={showalert}/>  */}
       {/* <About/> */}
    </div>
   </Router>
  </>
  );
}
export default App;


