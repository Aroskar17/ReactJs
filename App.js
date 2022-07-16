import React, { useState, useEffect } from 'react';
import Form from "./Form"
function App() {
  const [count, setCount] = useState(0);
  const [count2,setCount2]=useState(0);
  const [text,setText]=useState("");
  useEffect(() => {
    alert("Button 1 was pressed "+count+" Times");
  },[count]);
  useEffect(() => {
    alert("Hello World");
  },[count2]);
  useEffect(()=>{   
    
    if(text.length>10)
    alert("Text in text area is "+text)
  })
  return (
    <div>
    <Form />
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h2>You clicked button2 {count2} times</h2>
      <button onClick={()=>setCount2(count2+1)}>Click Me</button>
      <br></br> 
      <text onMouseOverCapture={(event)=>{
        
        alert(event.target)
      }}>hello world</text>
       <br></br>  <br></br> 
      <textarea onChange={(event)=>{setText(event.target.value)}}></textarea>
    </div>
  );
}
export default App;