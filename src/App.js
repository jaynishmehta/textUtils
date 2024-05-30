// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForms from './components/TextForms';
import About from './components/About';
export default function App() {
  return (
    <>
     {/* use of props inside component navbar   */}
    {/* <Navbar title={"TextUtils"} about="About TextUtils"/>  */}
    {/* <Navbar/> */}
    <Navbar title={"TextUtils"} /> 
    {/* using container divsion built in div in boots for styling */}
    <div className="container my-3"> 
       {/* <TextForms heading="Enter the text to analyse"/>  */}
       <About/>
    </div>
    
  </>
  );
}


