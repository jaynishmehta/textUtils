import React,{useState} from 'react'

export default function TextForms(props) {
    const handleUpClick= ()=>{
        console.log("Uppercase was clicked"+text);
        let newtext= text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange = (event)=>{
        console.log("Onchange");
        setText(event.target.value);
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
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </form>
    </div>
  )
}
