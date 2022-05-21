//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from 'react';
import ReactDOM from 'react-dom'
const styleHead={
  backgroundColor:"lightblue",
  fontSize:"56px",
  color:"orange",

}
let date =new Date();
let hour=date.getHours();
let message=""
if(hour>=0&&hour<=12)
message="Good Morning";
else if(hour<=18&&hour)
message="Good Afternoon";
else 
message="Good Evening";

styleHead.backgroundColor="red"
ReactDOM.render(
  <h1 style={styleHead}>
    {message}
    </h1>,
    document.getElementById('root')
)
