import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import App from "./components/App"


const brand={
    name:"HaRI om narayan",
    cost:24,
    milege:45,
    speed:"30milesperhour"
}
ReactDOM.render(<App details={brand}/>,document.getElementById("root"));
