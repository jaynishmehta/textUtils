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
    const[text,setText]= useState('');
    // text="new-text";// wrong way to change the state
    // setText("new text"); // correct way to set the state
  return (
    <div className="container" style={{color: props.mode==='dark'? 'white':'#03300d'}}>
      <div className="container my-2">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'#03300d'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleReverse}>Convert to Reverse</button>
      </div>
      <div className="container my-3">
      <h2>Your text summary </h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview in Textbox"}</p>
      </div>

    </div>
  )
}
