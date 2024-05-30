import React,{useState} from 'react'

export default function TextForms(props) {
    const handleUpClick= (event)=>{
        event.preventDefault();
        console.log("Uppercase was clicked"+text);
        let newtext= text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange = (event)=>{
        console.log("Onchange");
        setText(event.target.value);
    }
    
    const handleReverse= (event)=>{
        event.preventDefault(); //this helped the page to not to change to the default state
        console.log("clicked on reverse");
        
        function reverseString(newtext) {
          newtext = newtext.split("").reverse().join("");
          return newtext;
        }
        let newtext = text;
        setText(reverseString(newtext))
    }
    const[text,setText]= useState('Enter your text');
    // text="new-text";// wrong way to change the state
    // setText("new text"); // correct way to set the state
  return (
    <div>
      <form>
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleReverse}>Convert to Reverse</button>
    </form>
    </div>
  )
}
