// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React ,{ useState } from 'react';
function App() {
  const [mode,setMode]=useState('light'); //whether mode is dark enalbed or not
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#03300d';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
     {/* use of props inside component navbar   */}
    {/* <Navbar title={"TextUtils"} about="About TextUtils"/>  */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/> 
    {/* using container divsion built in div in boots for styling */}
    <div className="container my-3"> 
       <TextForms heading="Enter the text to analyse" mode={mode}/> 
       {/* <About/> */}
    </div>
   
  </>
  );
}
export default App;


