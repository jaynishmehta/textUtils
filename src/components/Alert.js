import React from 'react' //import rfc(react function components)

export default function Alert(props) {
  if (props.alert === null) {
    return null; // Render nothing if alert is null
  }
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    <>
      <div style={{height:'80px'}}>
          {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          
          </div>}
      </div>
    </>
  )
}
